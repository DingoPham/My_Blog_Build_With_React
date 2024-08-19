import ThemeSwitch from "./ThemeSwitch";
import ToTopFunc from "./ToTopFunction";

function FunctionContainer(){
    return(
        <div>
            <div className="position-fixed fu-con fu-con-box p-1">   
                <div className="flex flex-column items-center gap-10">
                    <ToTopFunc />
                    <ThemeSwitch />
                </div>
            </div>
        </div>
    )
}

export default FunctionContainer;