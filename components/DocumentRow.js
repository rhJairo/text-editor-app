import Button from "@material-tailwind/react/Button";
import Icon from "@material-tailwind/react/Icon";
import { userRouter } from "next/dist/client/router"

function DocumentRow(id,fileName,date) {
  return ( 
    <div className="flex items-center p-4 rounded-lg">
      <Icon name="article" size="3xl" color="blue" />
      <p className="flex-grow pl-5 w-10 pr-10 truncate">{fileName}</p>
      <p className="pr-5 text-sm">{date?.toDate().toLocaleDateString()}</p>
    </div>
   );
}

export default DocumentRow;