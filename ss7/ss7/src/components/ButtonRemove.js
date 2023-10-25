export function ButtonRemove(btnTitle, onclickFn) {
    return(
        <button id={"remove-btn"} onClick={onclickFn}>
            {btnTitle}
        </button>
    );
}