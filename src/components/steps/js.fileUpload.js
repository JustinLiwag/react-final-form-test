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

const FileUpload = () => {
    return (
        <div>
            <div className="max-w-xl mx-auto">
                <p className="text-sm font-bold text-gray-700">File Upload</p>
                <div className="mt-4">
                    <label className="block text-sm font-medium text-gray-700">
                        Resume Upload
                    </label>
                    <Field name="resume" validate={required}>
                        {(props) => {
                            return (
                                <div className="mt-2">
                                    <input
                                        accept="application/pdf, application/vnd.ms-excel"
                                        type="file"
                                        // {...props.input}
                                        onChange={({ target }) => {
                                            return props.input.onChange(
                                                target.files
                                            );
                                        }}
                                        placeholder="Upload your resume"
                                        className="block w-full px-4 py-3 border-gray-300 rounded shadow-sm focus:ring-teal-600 focus:border-teal-600 sm:text-sm"
                                    />
                                </div>
                            );
                        }}
                    </Field>
                    <Error name="resume" />
                </div>
            </div>
        </div>
    );
};

export default FileUpload;
