import { useForm } from "react-hook-form"
import { onSubmit } from '../../helpers/form'
import Message from './Message'

import styles from './PageBuilderForm.module.scss'

const VolunteerForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({ nativeValidation: true })

  return (
    <form className={styles.form} name="volunteer" method="post" action="/" data-netlify="true" netlify-honeypot="bot-field" onSubmit={handleSubmit(onSubmit)}>
      <div className={styles.formField}>
        <label className={styles.formLabel} id="name" htmlFor="name">Name*</label>
        {errors.name && errors.name.type === 'required' && <span className={styles.formError}>This field is required</span>}
        <input
          className={styles.formInput}
          aria-invalid={errors.email ? 'true' : 'false'}
          {...register("name", { required: true })} 
        />
      </div>
      <div className={styles.formField} id="email" htmlFor="email">
        <label className={styles.formLabel}>Email*</label>
        {errors.email && errors.email.type === 'required' && <span className={styles.formError}>This field is required</span>}
        {errors.email && errors.email.type === 'pattern' && <span className={styles.formError}>{errors.email.message}</span>}
        <input className={styles.formInput} {...register("email", { 
          required: true, 
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            message: "Please enter a valid email"
          } 
        })} />
      </div>
      <div className={styles.formField} id="tel" htmlFor="tel">
        <label className={styles.formLabel}>Telephone*</label>
        {errors.tel && errors.tel.type === 'required' && <span className={styles.formError}>This field is required</span>}
        <input className={styles.formInput} {...register("tel", { required: true })} />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel} id="message" htmlFor="message">Tell us about yourself*</label>
        {errors.message && errors.message.type === 'required' && <span className={styles.formError}>This field is required</span>}
        <textarea className={styles.formTextarea} {...register("message", { required: true })} />
      </div>
      <button className={styles.formSubmit} type="submit" data-style="ghost">Send</button>

      <Message icon="solidarity" />
    </form>
  )
}

export default VolunteerForm