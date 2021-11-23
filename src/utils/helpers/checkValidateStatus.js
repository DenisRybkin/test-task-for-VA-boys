export const firstCheckingValidateStatus = ({touched, errors, values}) => {
    return (!touched ? "" : errors? "error" :  values ? "success" : "error")
}
export const SecondCheckingValidateStatus = () => {

}