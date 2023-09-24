export interface ILoginData {
    username: string,
    password: string
}

export interface IUser {
    id: number,
    email: string,
    username: string,
    password: string,
    name: {
        firstname: string,
        lastname: string
    },
    address: {
        city: string,
        street: string,
        number: number,
        zipcode: string,
        geolocation: {
            lat: string,
            long: string
        }
    },
    phone: string
}

export interface ILoginResponse {
    token: string
}

export interface IProduct {
    id: number,
    title: string,
    price: string,
    category: string,
    description: string,
    image: string,
    rating: {
        rate: number,
        count: number
    }
}