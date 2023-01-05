import { ClockIcon } from "@heroicons/react/outline";

const FirstPayment = () => {
    return (
      <div className="form space-y-3">
<ClockIcon className="text-violet-600 mx-auto h-12" />
  <h1 className="text-violet-600 text-center text-xl bold">Awaiting Payment </h1>
  <p className="text-center"> your Smart Invoice for [client_name] has been sent and a copy has been emailed to you.</p>
  <p className="text-center">We&lsquo;ll let you know as soon as the payment is locked in Payant.</p>
     </div>
    );
  };
  export default FirstPayment;
  