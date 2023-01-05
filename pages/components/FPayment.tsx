import { ClockIcon } from "@heroicons/react/outline";

const FirstPayment = (props) => {
    return (
      <div className="form space-y-3">
<ClockIcon className="text-violet-600 mx-auto h-12" />
  <h1 className="text-violet-600 text-center text-xl bold">Awaiting Payment </h1>
  <p className="text-center "> The deliverables have been successfully reviewed by [client_name]. The funds have been unlocked</p>
      </div>
    );
  };
  export default FirstPayment;
  