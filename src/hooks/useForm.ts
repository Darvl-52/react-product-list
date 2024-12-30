import {useState} from "react";
import {sendProduct, SendProduct} from "../shared/api/api.ts";
import * as React from "react";

export function useFormData() {
    const [formData, setFormData] = useState<SendProduct>({
        title: '',
        text: '',
        price: 0
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const SubmitForm = async () => {
        try {
            await sendProduct(formData);
            setFormData({title: '',  text: '', price: 0})
        } catch (e) {
            console.log(e);
        }
    };

    return {
        formData,
        handleChange,
        SubmitForm
    }
}