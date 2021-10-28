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

const Skills = () => {
    return (
        <>
            <h1>Skills</h1>
            <Field name="skills" validate={required}>
                {(props) => {
                    return (
                        <div className="mt-2">
                            <input
                                autoComplete="off"
                                type="text"
                                {...props.input}
                                onChange={(e) =>
                                    props.input.onChange(
                                        e.target.value
                                            .split(',')
                                            .map((skill) => skill.trimStart())
                                    )
                                }
                                placeholder="Leadership, Project Management, ..."
                                className="block w-full px-4 py-3 border-gray-300 rounded shadow-sm focus:ring-teal-600 focus:border-teal-600 sm:text-sm"
                            />
                            <div className="mt-4">
                                {props.input.value &&
                                    props.input.value.map((skill, index) => (
                                        <p
                                            key={index}
                                            className="inline-block p-2 mr-2 bg-teal-100 rounded"
                                        >
                                            {skill}
                                        </p>
                                    ))}
                            </div>
                            <Error name="skills" />
                        </div>
                    );
                }}
            </Field>
        </>
    );
};

export default Skills;
