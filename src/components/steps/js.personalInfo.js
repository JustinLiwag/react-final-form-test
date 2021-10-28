import React from 'react';
import { Field } from 'react-final-form';

const required = (value) => (value ? undefined : 'Required');

const Error = ({ name }) => {
    return (
        <Field
            name={name}
            subscription={{ touched: true, error: true }}
            render={({ meta: { touched, error } }) => {
                return touched && error ? (
                    <span className="block my-2 ml-2 text-red-500">
                        {error}
                    </span>
                ) : null;
            }}
        />
    );
};

const PersonalInfo = () => {
    return (
        <div className="max-w-xl mx-auto">
            <div>
                <label className="block text-sm font-medium text-gray-700">
                    First Name
                </label>
                <Field name="firstName" validate={required}>
                    {(props) => {
                        return (
                            <div className="mt-2">
                                <input
                                    type="text"
                                    {...props.input}
                                    placeholder="First Name"
                                    className="block w-full px-4 py-3 border-gray-300 rounded shadow-sm focus:ring-teal-600 focus:border-teal-600 sm:text-sm"
                                />
                            </div>
                        );
                    }}
                </Field>
                <Error name="firstName" />
            </div>
            <div className="mt-2">
                <label className="block text-sm font-medium text-gray-700">
                    Last Name
                </label>
                <Field name="lastName" validate={required}>
                    {(props) => {
                        return (
                            <div className="mt-2">
                                <input
                                    type="text"
                                    {...props.input}
                                    placeholder="Last Name"
                                    className="block w-full px-4 py-3 border-gray-300 rounded shadow-sm focus:ring-teal-600 focus:border-teal-600 sm:text-sm"
                                />
                            </div>
                        );
                    }}
                </Field>
                <Error name="lastName" />
            </div>
        </div>
    );
};

export default PersonalInfo;
