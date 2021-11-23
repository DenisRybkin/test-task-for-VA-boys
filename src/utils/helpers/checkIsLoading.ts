interface CheckIsLoadingInterface {
    firstLoading: boolean;
    secondLoading: boolean;
    firstError: null | string;
    secondError: null | string;
}

interface ErrorsInterface {
    errors: { firstError: string, secondError: string }
}

interface ErrorInterface {
    error: string;
}

interface LoadingInterface {
    loading : boolean
}

export type CheckIsLoadingReturnTypes =
    | ErrorsInterface
    | ErrorInterface
    | LoadingInterface

export const CheckIsLoading = ({firstLoading, secondLoading, firstError, secondError}: CheckIsLoadingInterface) : CheckIsLoadingReturnTypes  => {
    if (firstError !== null || secondError !== null) {
        if (firstError !== null && secondError !== null) {
            return {errors: {firstError, secondError}}
        }
        // @ts-ignore
        return  {error : firstError !== null ? firstError : secondError}
    } else if (!firstLoading && !secondLoading) {
        return {loading: false}
    } else {
        return {loading: true}
    }
}