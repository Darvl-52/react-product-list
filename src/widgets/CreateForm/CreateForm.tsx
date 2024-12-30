import styles from './creteForm.module.css';
import {useFormData} from "../../hooks/useForm.ts";
import {SubmitHandler, useForm} from "react-hook-form";

type FormValues = {
    title: string;
    text: string;
    price: string;
};

export function CreateForm () {

    const { formData, SubmitForm, handleChange } = useFormData();

    const {register, handleSubmit, formState:{ errors }} = useForm<FormValues>();

    const submit: SubmitHandler<FormValues> = async () => {
        await SubmitForm();
    }

    return (
        <div className={styles.containerForm}>
            <form className={styles.form} onSubmit={handleSubmit(submit)}>
                <h1>Создать Товар</h1>
                <input
                    placeholder='Название'
                    {...register('title', {
                        required: "Название обязательно",
                        maxLength: { value: 50, message: "Название не может быть длиннее 50 символов" }
                    })}
                    type='text'
                    value={formData.title}
                    onChange={handleChange}
                    className={styles.input}
                />
                {errors.title && <span className={styles.error}>{errors.title.message}</span>}
                <textarea
                    placeholder='Описание'
                    {...register('text', {
                        required: "Описание обязательно",
                        minLength: { value: 10, message: "Описание должно быть не менее 10 символов" }
                    })}
                    value={formData.text}
                    onChange={handleChange}
                    rows={6}
                    cols={30}
                    style={{ resize: 'none' }}
                    className={styles.input}
                />
                {errors.text && <span className={styles.error}>{errors.text.message}</span>}
                <input
                    placeholder='Цена в $'
                    {...register('price', {
                        required: "Цена обязательна",
                        pattern: { value: /^[0-9]+(\.[0-9]{1,2})?$/, message: "Введите корректную цену (например, 10.99)" },
                        min: { value: 1, message: "Цена должна быть больше 0" },
                    })}
                    type='number'
                    value={formData.price}
                    onChange={handleChange}
                    className={styles.input}
                />
                {errors.price && <span className={styles.error}>{errors.price.message}</span>}
                    <button
                        type='submit'
                        className={styles.form_button}
                    >
                        Отправить
                    </button>
            </form>
        </div>
    )
}