import {lazy} from "react";

const CareGiverIndex = lazy(() => import('../page/caregiver/CareGiverIndex.jsx'))
const CareGiver = lazy(() => import('../page/caregiver/CareGiverPage'))

const CareGiverRouter = {
    path: "/caregiver",
    element: <CareGiverIndex/>,
    children: [
        {
            path: "",
            element: <CareGiver/>
        }
    ]
}

export default CareGiverRouter;