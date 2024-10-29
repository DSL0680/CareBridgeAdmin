import CommonTableComponent from "@/common/CommonTableComponent.jsx";
import {
    deleteTaker,
    getCareTakerList,
    getCareTakerMatchList,
    getCareTakerOne,
    updateTaker
} from "@/api/caretakerAPI.js";


const column = [
    "ctno", "ctname", "ctage", "ctemail", "ctphone", "ctaddress"
];

const tableHeader = [
    "name", "age", "phone", "email", "address"
]

function CareTakerComponent() {


    const takerMatchedListFn = getCareTakerMatchList;


    return (
        <CommonTableComponent
                              tableHeader={tableHeader}
                              column={column}
                              listFn={getCareTakerList}
                              detailFn={getCareTakerOne}
                              delfn={deleteTaker}
                              updateFn={updateTaker}
                              takerMatchedListFn={takerMatchedListFn}
        >
        </CommonTableComponent>
    );
}

export default CareTakerComponent;
