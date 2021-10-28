import React from 'react';
import { Field } from 'react-final-form';
import { FieldArray } from 'react-final-form-arrays';

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

const Customers = () => {
    return (
        <>
            <div>Add Customers</div>
            <FieldArray name="customers">
                {({ fields }) =>
                    fields.map((name, index) => (
                        <div key={name}>
                            <p className="block p-2 mt-4 font-medium text-gray-700 bg-green-100 rounded text-md">
                                Customer. #{index + 1}
                            </p>
                            <label className="block mt-2 text-sm font-medium text-gray-700">
                                First Name
                            </label>
                            <Field
                                name={`${name}.firstName`}
                                validate={required}
                            >
                                {(props) => {
                                    return (
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                {...props.input}
                                                placeholder="First name"
                                                className="block w-full px-4 py-3 border-gray-300 rounded shadow-sm focus:ring-teal-600 focus:border-teal-600 sm:text-sm"
                                            />
                                        </div>
                                    );
                                }}
                            </Field>
                            <Error name={`${name}.firstName`} />
                            <label className="block mt-2 text-sm font-medium text-gray-700">
                                Last Name
                            </label>
                            <Field
                                name={`${name}.lastName`}
                                validate={required}
                            >
                                {(props) => {
                                    return (
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                {...props.input}
                                                placeholder="Last name"
                                                className="block w-full px-4 py-3 border-gray-300 rounded shadow-sm focus:ring-teal-600 focus:border-teal-600 sm:text-sm"
                                            />
                                        </div>
                                    );
                                }}
                            </Field>
                            <Error name={`${name}.lastName`} />
                            <FieldArray name={`${name}.info`}>
                                {({ fields }) => {
                                    return fields.map((name, index) => {
                                        return (
                                            <div>
                                                <label className="block mt-2 text-sm font-medium text-gray-700">
                                                    Info
                                                </label>
                                                <Field
                                                    name={`${name}.details`}
                                                    validate={required}
                                                >
                                                    {(props) => {
                                                        return (
                                                            <div className="mt-2">
                                                                <input
                                                                    type="text"
                                                                    {...props.input}
                                                                    placeholder="Information"
                                                                    className="block w-full px-4 py-3 border-gray-300 rounded shadow-sm focus:ring-teal-600 focus:border-teal-600 sm:text-sm"
                                                                />
                                                            </div>
                                                        );
                                                    }}
                                                </Field>
                                                <span
                                                    onClick={() =>
                                                        fields.remove(index)
                                                    }
                                                    className="inline-block p-2 mt-4 bg-red-100"
                                                >
                                                    Delete Info
                                                </span>
                                                {fields.length - 1 ===
                                                    index && (
                                                    <span
                                                        onClick={() =>
                                                            fields.push({
                                                                details: '',
                                                            })
                                                        }
                                                        className="block p-2 mt-4 bg-blue-100"
                                                    >
                                                        Add Info
                                                    </span>
                                                )}
                                            </div>
                                        );
                                    });
                                }}
                            </FieldArray>

                            <span
                                onClick={() => fields.remove(index)}
                                className="inline-block p-2 mt-4 bg-red-100"
                            >
                                Remove
                            </span>
                        </div>
                    ))
                }
            </FieldArray>
        </>
    );
};

export default Customers;
