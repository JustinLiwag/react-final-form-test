import React from 'react';
import { Field } from 'react-final-form';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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

const Dates = () => {
    return (
        <>
            <h1>Dates</h1>
            <label className="block mt-2 text-sm font-medium text-gray-700">
                Posting Date
            </label>
            <Field name="postingDate" validate={required}>
                {(props) => {
                    return (
                        <div className="mt-2">
                            <DatePicker
                                {...props.input}
                                selected={props.input.value}
                                onChange={(date) => props.input.onChange(date)}
                                className="block w-full px-4 py-3 border-gray-300 rounded shadow-sm focus:ring-teal-600 focus:border-teal-600 sm:text-sm"
                            />
                        </div>
                    );
                }}
            </Field>
            <Error name="postingDate" />
            <label className="block mt-2 text-sm font-medium text-gray-700">
                Closing Date
            </label>
            <Field name="closingDate" validate={required}>
                {(props) => {
                    return (
                        <div className="mt-2">
                            <DatePicker
                                {...props.input}
                                selected={props.input.value}
                                onChange={(date) => props.input.onChange(date)}
                                className="block w-full px-4 py-3 border-gray-300 rounded shadow-sm focus:ring-teal-600 focus:border-teal-600 sm:text-sm"
                            />
                        </div>
                    );
                }}
            </Field>
            <Error name="closingDate" />
        </>
    );
};

export default Dates;
