export function ButtonShowList(btnTitle, onclickFn) {

    return (
        <button className="fancy" onClick={onclickFn}>
            <span className="top-key"></span>
            <span className="text">{btnTitle}</span>
            <span className="bottom-key-1"></span>
            <span className="bottom-key-2"></span>
        </button>
    )
}