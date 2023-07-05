import { ErrorMessage, Field, Form, Formik } from "formik";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import AOS from "aos";
import "animate.css";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FormContact = () => {
  const [sended, setSended] = useState(false);
  const form = useRef();
  const containerRef = useRef(null);
  const imagenMovil = useRef(null);
  const [style, setStyle] = useState({
    x: "",
    y: "",
  });

  useEffect(() => {
    AOS.init({ duration: 2000, easing: "ease-in-out-cubic", delay: 16 });
    const containerWidth = containerRef.current.offsetWidth;
    const containerHeight = containerRef.current.offsetHeight;
    const moverImagen = () => {
      const x =
        Math.random() * (containerWidth - imagenMovil.current.offsetWidth);
      const y =
        Math.random() * (containerHeight - imagenMovil.current.offsetHeight);
      setStyle({ x: x, y: y });
    };

    const intervalId = setInterval(moverImagen, 3000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);
  const handleOnSubmit = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_s64uvlv",
        "template_1tpu6bq",
        form.current,
        "hv0EKKp14CDzYO1qw"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <section
      ref={containerRef}
      id='contact'
      className='w-full  bg-opacity-40 md:p-10 p-5 pt-10 md:pt-20 md:space-y-10 space-y-5 text-slate-100  overflow-hidden relative'>
      <h2
        className='text-center md:text-3xl text-2xl p-2 font-fraunces text-stone-100 snap-center '
        data-aos='fade-up'
        data-aos-anchor-placement='center-bottom'>
        Contact me
      </h2>
      <img
        style={{
          transform: `translateX(${style.x}px) translateY(${style.y}px)`,
        }}
        ref={imagenMovil}
        className={`absolute h-40  top-0 left-0 duration-500 ease-in-out   `}
        src='/space/platillo_volador.jpg '
        alt='Astronauta'
        data-aos='fade-up-left'
      />
      <div className='w-full flex justify-center items-center text-slate-100  '>
        <Formik
          initialValues={{
            name: "",
            email: "",
            lastname: "",
            subject: "",
            message: "",
          }}
          validate={(values) => {
            let errors = {};
            if (!values.name) {
              errors.name = "Plis write a name";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.name)) {
              errors.name = "Your name don't to get special characters";
            }
            if (!values.lastname) {
              errors.lastname = "Plis write a lastname";
            } else if (!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(values.lastname)) {
              errors.lastname = "Your lastname don't to get special characters";
            }
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(
                values.email
              )
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { resetForm }) => {
            resetForm();
            setSended(true);
            setTimeout(() => {
              setSended(false);
            }, 5000);
          }}>
          {({ errors }) => (
            <Form
              onSubmit={handleOnSubmit}
              ref={form}
              className='md:w-2/3 space-y-5 w-full '
              data-aos='flip-down'>
              <div className='flex space-x-5 font-catamaran text-lg'>
                <div
                  className='w-full '
                  data-aos='fade-down-right'>
                  <Field
                    className='w-full rounded-md p-2 outline-none border-none text-slate-100 bg-gray-900  '
                    type='text'
                    name='name'
                    placeholder='name'
                  />
                  <ErrorMessage
                    name='name'
                    component={() => (
                      <span className='text-red-500 text-center font-serif'>
                        {errors.name}
                      </span>
                    )}
                  />
                </div>
                <div
                  className='w-full font-catamaran text-lg '
                  data-aos='fade-up-left'>
                  <Field
                    className='w-full rounded-md p-2 outline-none border-none text-slate-100 bg-gray-900 '
                    type='text'
                    name='lastname'
                    placeholder='lastname'
                  />
                  <ErrorMessage
                    name='lastname'
                    component={() => (
                      <span className='text-red-500 text-center font-serif'>
                        {errors.lastname}
                      </span>
                    )}
                  />
                </div>
              </div>
              <Field
                className='w-full rounded-md p-2 outline-none border-none text-slate-100 bg-gray-900 font-catamaran text-lg'
                type='email'
                name='email'
                placeholder='email'
                data-aos='fade-down-left'
                required
              />
              <ErrorMessage
                name='email'
                component={() => (
                  <span className='text-red-500 text-center font-serif'>
                    {errors.email}
                  </span>
                )}
              />

              <input
                className='w-full rounded-md p-2 outline-none border-none text-slate-100 bg-gray-900 font-catamaran text-lg'
                type='text'
                placeholder='subject'
                data-aos='fade-up-right'
              />

              <textarea
                rows={5}
                className='w-full rounded-md p-2 outline-none border-none text-slate-100 bg-gray-900 max-h-48 font-catamaran text-lg'
                placeholder='message'
                data-aos='fade-right'></textarea>

              <button
                className='  px-8 py-1 rounded-md overflow-hidden border-2 border-gray-900 relative transition-all duration-300 after:absolute after:content-[""] after:w-full after:h-full after:left-0 after:-top-full after:bg-gray-900 after:transition-all after:duration-300 
                after:-z-10
                 before:-z-10
                before:absolute after:box-border before:box-border before:content-[""] before:w-full before:h-full before:-top-full before:left-0  before:bg-gray-900 before:transition-all before:duration-300 before:opacity-50 after:delay-200 hover:text-slate-100 hover:before:top-0 hover:after:top-0'
                type='submit'
                data-aos='fade-left'>
                Send
              </button>
              {sended && (
                <p className='text-green-400 text-center font-semibold '>
                  El formulario se ha enviado con existo!!!
                </p>
              )}
            </Form>
          )}
        </Formik>
      </div>
    </section>
  );
};

export default FormContact;
