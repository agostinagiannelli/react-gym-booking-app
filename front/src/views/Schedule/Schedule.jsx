import { Formik, Field, Form, ErrorMessage } from 'formik'
import { scheduleAppointment } from '../../helpers/axios'
import { validateAppointment } from '../../helpers/validateAppointment'
import { showToast } from '../../helpers/showToast'
import Input from '../../components/Input/Input'
import SubmitButton from '../../components/Buttons/SubmitButton'
import Title from '../../components/Title/Title'
import NavBar from '../../components/NavBar/NavBar'
import Footer from '../../components/Footer/Footer'

export default function Schedule() {
    const handleSubmit = (values) => {
        scheduleAppointment(values)
            .then((res) => {
                showToast({ text: "Class booked! Ready to sweat? 💦" }, { destination: "" });
            })
            .catch((err) => {
                console.error(err);
                showToast({ text: "Oops! Unable to book class 🚫" }, { destination: "" });
            })
    };

    return (
        <div className='bg-image'>
            <NavBar />
            <Title
                title="Save Your Spot"
            />
            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <Formik
                            initialValues={{ date: '', time: '' }}
                            validate={validateAppointment}
                            onSubmit={handleSubmit}
                        >
                            {({ isValid }) => (
                                <Form>
                                    <Input
                                        placeholder="01/01/2025"
                                        type="date"
                                        name="date"
                                        label="Date"
                                    />
                                    <div className="form-floating">
                                        <Field
                                            className="form-select"
                                            as="select"
                                            name="time">
                                            <option value="07:00:00">7am to 8am</option>
                                            <option value="08:00:00">8am to 9am</option>
                                            <option value="17:00:00">5pm to 6pm</option>
                                            <option value="18:00:00">6pm to 7pm</option>
                                            <option value="19:00:00">7pm to 8pm</option>
                                            <option value="20:00:00">8pm to 9pm</option>
                                        </Field>
                                        <ErrorMessage
                                            name="time"
                                            component="div"
                                            className="mt-2 errorMessage" />
                                        <label htmlFor="time">Time</label>
                                    </div>
                                    <div className="d-flex justify-content-center pt-4 pb-5">
                                        <SubmitButton
                                            disabled={!isValid}
                                            text="Book Now" />
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}