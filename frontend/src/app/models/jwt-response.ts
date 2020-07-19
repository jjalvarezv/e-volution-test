
// export class JwtResponse {

//     constructor(
//         _id:number,
//         name: string,
//         email: string,
//         accessToken: string,
//         expiresIn: string
//     ) {

//     }
// }

export interface JwtResponseI {
    dataUser: {
        id: string,
        email: string,
        accessToken: string,
        expiresIn: string
    }
}