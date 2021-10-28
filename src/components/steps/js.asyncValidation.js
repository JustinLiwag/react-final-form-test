import React from 'react';
import axios from 'axios';
import { Field } from 'react-final-form';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const simpleMemoize = (fn) => {
    let lastArg;
    let lastResult;
    return (arg) => {
        if (arg !== lastArg) {
            lastArg = arg;
            lastResult = fn(arg);
        }
        return lastResult;
    };
};

const usernameAvailable = simpleMemoize(async (orgCode) => {
    if (!orgCode) {
        return 'Required';
    }
    await sleep(400);
    try {
        await axios.post('http://localhost:5000/api/organizations/validate', {
            orgCode,
        });
        return null;
    } catch (error) {
        return <p className="text-red-500">Organization Code Invalid</p>;
    }
});

const Error = ({ name }) => {
    return (
        <Field
            name={name}
            subscription={{ touched: true, error: true }}
            render={({ meta: { touched, error } }) => {
                return touched && error ? (
                    <span className="block my-2 text-red-500">{error}</span>
                ) : null;
            }}
        />
    );
};

const AsyncValidation = () => {
    return (
        <div className="max-w-xl mx-auto">
            <p className="text-sm font-bold text-gray-700">Async Validation</p>
            <div className="mt-4">
                <label className="block text-sm font-medium text-gray-700">
                    Company Code
                </label>
                <Field name="companyCode" validate={usernameAvailable}>
                    {(props) => {
                        return (
                            <div className="mt-2">
                                <input
                                    type="text"
                                    {...props.input}
                                    placeholder="Enter Company Code (nuleep-xxxxxx...)"
                                    className="block w-full px-4 py-3 border-gray-300 rounded shadow-sm focus:ring-teal-600 focus:border-teal-600 sm:text-sm"
                                />
                            </div>
                        );
                    }}
                </Field>
                <Error name="companyCode" />
            </div>
        </div>
    );
};

export default AsyncValidation;
