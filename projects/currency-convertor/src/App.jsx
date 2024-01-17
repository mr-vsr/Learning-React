import { useState } from 'react'
import { InputBox } from './components'
import useCurrencyInfo from './hooks/useCurrencyInfo'

function App() {

  const [amount, setAmount] = useState(0)//we are using setState to update the amount in the form field
  const [from, setFrom] = useState("inr")//we are using useState to update the currency field in the from input box.
  const [to, setTo] = useState("usd")//we are using useState to update the currency field in the to input box.
  const [convertedAmount, setConvertedAmount] = useState(0)//we are using  this useState to set the value of the amount field in the to field.

  const currencyInfo = useCurrencyInfo(from)//This is the custom hook created for fetching the exchange rates and the currencies and return the required data.

  const options = Object.keys(currencyInfo)//Here we are storing all the key which are currencies and its value is the exchange rate. We are getting this object from our custom hook.

  //This function implements the functionality of swapping the from into to and to into from
  const swap = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  //This function gives the actually value after converting the amount to desired currency 
  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }


  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('../public/17454.jpg')`,
        
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()//Whenever some one tries to submit that is convert button is pressed.
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"//input box type
                amount={amount}//setting the amount
                currencyOptions={options}//Passing the list of currencies 
                onCurrencyChange={(currency) => setAmount(amount)}//What happens when we change the currency
                selectCurrency={from}//Selecting the currency
                onAmountChange={(amount) => setAmount(amount)}//What happens when we change the amount
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                onClick={swap}//This is fired when someone clicks on the swap button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"

              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={to}
                amountDisable//setting this value to true to prevent user from modifying the converted amount's value
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
};

export default App;
