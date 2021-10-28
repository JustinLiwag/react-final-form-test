import React from 'react';
import JSPersonalInfo from '../steps/js.personalInfo';
import JSCustomers from '../steps/js.customers';
import JSSkills from '../steps/js.skills';
import JSDates from '../steps/js.dates';
import JSAsyncValidation from '../steps/js.asyncValidation';
import JSFileUpload from '../steps/js.fileUpload';
import Wizard from './Wizard';

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = async (values) => {
    await sleep(300);
    console.log(values);
    window.alert(JSON.stringify(values, 0, 2));
};

const OnboardingContainer = () => {
    return (
        <div>
            <p className="mt-20 font-serif text-3xl text-center text-teal-600">
                On Boarding
            </p>
            <Wizard
                initialValues={{
                    customers: [{ firstName: '', lastName: '', info: [''] }],
                }}
                onSubmit={onSubmit}
            >
                <Wizard.Page>
                    <JSPersonalInfo />
                </Wizard.Page>

                <Wizard.Page>
                    <JSCustomers />
                </Wizard.Page>

                <Wizard.Page>
                    <JSSkills />
                </Wizard.Page>

                <Wizard.Page>
                    <JSDates />
                </Wizard.Page>

                <Wizard.Page>
                    <JSAsyncValidation />
                </Wizard.Page>

                <Wizard.Page>
                    <JSFileUpload />
                </Wizard.Page>
            </Wizard>
        </div>
    );
};

export default OnboardingContainer;
