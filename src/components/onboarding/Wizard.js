import React from 'react';
import { Form } from 'react-final-form';
import arrayMutators from 'final-form-arrays';

export default class Wizard extends React.Component {
    static Page = ({ children }) => children;

    constructor(props) {
        super(props);
        this.state = {
            page: 5,
            values: props.initialValues || {},
        };
    }

    next = (values) =>
        this.setState((state) => ({
            page: Math.min(state.page + 1, this.props.children.length - 1),
            values,
        }));

    previous = () =>
        this.setState((state) => ({
            page: Math.max(state.page - 1, 0),
        }));

    validate = (values) => {
        const activePage = React.Children.toArray(this.props.children)[
            this.state.page
        ];
        return activePage.props.validate
            ? activePage.props.validate(values)
            : {};
    };

    handleSubmit = (values) => {
        const { children, onSubmit } = this.props;
        const { page } = this.state;
        const isLastPage = page === React.Children.count(children) - 1;
        if (isLastPage) {
            return onSubmit(values);
        } else {
            this.next(values);
        }
    };

    handleForm = (formData) => {
        const results = new FormData();
        results.append('file', formData[0]);
        return results;
    };

    render() {
        const { children } = this.props;
        const { page, values } = this.state;
        const activePage = React.Children.toArray(children)[page];
        const isLastPage = page === React.Children.count(children) - 1;
        return (
            <Form
                initialValues={values}
                validate={this.validate}
                onSubmit={this.handleSubmit}
                mutators={{ ...arrayMutators }}
            >
                {({
                    handleSubmit,
                    submitting,
                    values,
                    form: {
                        mutators: { push },
                    },
                }) => (
                    <form
                        className="max-w-xl p-8 mx-auto mt-4 rounded shadow"
                        onSubmit={handleSubmit}
                    >
                        {activePage}
                        {page === 1 && (
                            <button
                                className="px-4 py-2 mt-2 bg-green-100"
                                type="button"
                                onClick={() =>
                                    push('customers', {
                                        firstName: '',
                                        lastName: '',
                                        info: [''],
                                    })
                                }
                            >
                                Add
                            </button>
                        )}
                        <div className="flex justify-between max-w-xl mx-auto mt-4">
                            {page > 0 && (
                                <button
                                    className="mr-2 text-red-400"
                                    type="button"
                                    onClick={this.previous}
                                >
                                    « Previous
                                </button>
                            )}
                            {!isLastPage && (
                                <button
                                    className="flex px-4 py-1 text-green-800 bg-green-100 rounded-md flex-end"
                                    type="submit"
                                >
                                    Next »
                                </button>
                            )}
                            {isLastPage && (
                                <button
                                    className="px-4 py-1 text-green-800 bg-green-100 rounded-md"
                                    type="submit"
                                    disabled={submitting}
                                >
                                    Submit
                                </button>
                            )}
                        </div>

                        <pre className="max-w-xl p-8 mx-auto mt-8 shadow">
                            {JSON.stringify(values, 0, 2)}
                        </pre>
                        <pre className="max-w-xl p-8 mx-auto mt-8 shadow">
                            {values.resume &&
                                JSON.stringify(
                                    this.handleForm(values.resume),
                                    0,
                                    2
                                )}
                        </pre>
                    </form>
                )}
            </Form>
        );
    }
}
