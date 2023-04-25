//library
import { CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { useEffect, useRef } from "react";
import { Form, useFetcher } from "react-router-dom";

const AddBudgetForm = () => {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting";
    const focusRef = useRef();
    const formRef = useRef(); 
    useEffect(() => {
        if(!isSubmitting){
            formRef.current.reset()
            focusRef.current.focus()
        }
    }, [isSubmitting]) 
      return ( 
        <div className="form-wrapper">
            <h2 className="h3">Create Budget</h2>
            <fetcher.Form
            method="post"
            className="grid-sm"
            ref={formRef}
            >
                <div className="grid-xs">
                    <label htmlFor="newBudget">Budget Name</label>
                    <input type="text" name="newBudget" id="newBudget" placeholder="e.g,, Groceries" required ref={focusRef} />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Amount</label>
                    <input type="number" name="newBudgetAmount" step="0.01" id="newBudgetAmount" placeholder="e.g,, $350" required 
                    inputMode="decimal"/>
                    <input type="hidden" name="_action" value="createBudget" />
                </div>
                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Creating Budget...</span> : (
                            <>
                            <span>Create Budget</span>
                    <CurrencyDollarIcon width={20} />
                            </>
                        )
                    }
                </button>
            </fetcher.Form>

        </div>
     );
}
 
export default AddBudgetForm;