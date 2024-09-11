

export const required = (message: string = "Required") => (value: any) => {
    if (!value || value.toString().trim() === '')
        return { message }
};

export const range = (min: number, max: number, message?: string) => (value: any) => {

    
    if (isNaN(value))
        return;

    if (value < min) {
        return { message: message || `${value} should be greater than ${min}`, min, value }
    } else if (value > max) {
        return { message: message || `${value} should be less than ${max}`, max, value }
    }
};


export const validateURL = (message: string = "Invalid  URL") => (value: any) => {
    if (!value) return { message: "URL is required" };

    const isValid = value.startsWith("https") && value.endsWith(".com");
    if (!isValid) {
        return { message };
    }
};


export const lengthRange= (min:number,max:number, message?:string)=>(value:any)=>{
    value= value.toString();

    if(value.length<min){
        return {message:message || `${value} should have at least ${min} size`,min,value}

    } else if(value.length>max){
        return {message:message || `${value} should be at most ${max} size`,max,value}
    }
}





export const validateTags = (message: string = "Tags should be a comma-separated list") => (value: any) => {
    if (typeof value === 'string') {
        const tagsArray = value.split(', ');
        if (tagsArray) {
            return { message };
        }
    }
};
