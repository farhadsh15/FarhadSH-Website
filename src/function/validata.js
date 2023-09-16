export const validata = (data, type) => {

    const errors = {}

    
    if (data.email && !/\S+@\S+\.\S+/.test(data.email)) {
        errors.email = "ایمیل معتبر وارد کنید"
    } else {
        delete errors.email
    }
        
    if (!data.name.trim()) {
        errors.name = "نام خود را وارد کنید"
    } else {
        delete errors.name
    }

    if (!data.tel.trim()) {
        errors.tel = "تلفن خود را وارد کنید"
    } else {
        delete errors.name
    }

    if (!data.text.trim()) {
        errors.text = "پیام خود را وارد کنید"
    } else {
        delete errors.name
    }

    if (!data.topic.trim()) {
        errors.topic = "موضوع پیام خود را وارد کنید"
    } else {
        delete errors.name
    }

    // if (data.isAccepted) {
    //     delete errors.isAccepted
    // } else {
    //     errors.isAccepted = "Accept our regulations"
    // }

    return errors;
}