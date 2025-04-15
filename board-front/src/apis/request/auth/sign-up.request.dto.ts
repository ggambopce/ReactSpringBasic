export default interface SignUpRequestDto {
    email: string;
    password: string;
    nickname: string;
    telNumber: string;
    address: string;
    assressDetail: string | null;
    agreedPersonal: boolean;
}