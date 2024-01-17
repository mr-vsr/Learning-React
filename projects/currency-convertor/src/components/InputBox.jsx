import { useId } from "react";

//This is the component for the input box where the user will enter the amount to be converted (from) and also the component for the input box where the converted amount will be shown(to).
//The from input box will have the ability to select the currency from which we are converting and also give the user to type in  a number in the input field along with a button to increment the value with a button one by one.
//The to input box will not allow user to enter any value or change or modify the value present inside it.Also is will have a select currency field where the user can select form a list of currencies to which it wants to convert.

function InputBox({
    label, //To control the input box type between to and from
    amount,//The amount int the form field which have to be converted into some other currency type
    onAmountChange,//The method which will be fired when the amount field changes
    onCurrencyChange, //The method which will be fired when the currency field is changed in either input box
    currencyOptions = [], //This is an array which will contain the value of all the currency types
    selectCurrency = "usd", //The currency in which we want to convert to or from which we want to convert from
    amountDisable = false, //This is a field which can be used to give the user access to modify the amount in input box
    currencyDisable = false, //This is a field which will be used to give user the access to change the currency.
    className = "", //additonal classes that will be added to make both the input box structure properly based on the box type.
}) {

    const amountInputId = useId()

    return (
        <div className={`bg-white p-3 rounded-lg text-sm flex ${className} `}>
            <div className="w-1/2">
                <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                    {label}
                </label>
                <input
                    id={amountInputId}
                    className="outline-none w-full bg-transparent py-1.5"
                    type="number"
                    placeholder="Amount"
                    disabled={amountDisable}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))} //This callback function is fired when a change in amount occurs. It sets the amount value to the new value that the user has set
                />
            </div>
            <div className="w-1/2 flex flex-wrap justify-end text-right">
                <p className="text-black/40 mb-2 w-full">Currency Type</p>
                <select
                    className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                    value={selectCurrency}//The default currency is being set here and as the user changes the currency this field will update accordingly
                    disabled={currencyDisable}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}//onCurrencyChange && onCurrencyChange(e.target.value): This part checks if the onCurrencyChange function is defined (truthy) before attempting to call it. If onCurrencyChange is defined, it calls the function with the new selected value as an argument.when the user selects a different option from the dropdown, the onCurrencyChange function (if provided) will be called with the new selected value as an argument. This allows the parent component to handle and respond to changes in the selected currency.
                >

                    {currencyOptions.map((currency) => (
                        <option key={currency} value={currency}>
                            {currency}
                        </option>
                    ))}

                </select>
            </div>
        </div>
    );
}

export default InputBox;
