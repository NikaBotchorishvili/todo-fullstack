
function AddForm() {
    return (
        <form className="relative md:w-[30%]">
        <input
            type="text"
            placeholder="Create a new todo..."
            className="px-10 md:px-12 py-3 rounded-md w-full dark:bg-darkVeryDarkDesaturatedBlue dark:text-veryLightGray"
        />
        <button className="absolute w-[20px] h-[20px] border dark:border-darkGrayishBlue border-veryLightGrayishBlue rounded-full top-1/2 left-5 -translate-y-1/2"></button>
    </form>
    );
}

export default AddForm;