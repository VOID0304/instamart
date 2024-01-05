export default function LoginPage(){
    return(
        <>
        <div className="">
        <div className="text-center justify-items-center box mt-5">
            <div>
            <h1 className="font-bold">VoidMart</h1>
            </div>
            <div className="flex flex-col items-center">
            <div className="mb-6">
                <input type="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block mt-5 p-2.5" placeholder="voidmart@gmail.com" required/>
            </div> 
            <div className="mb-6">
                <input type="password" id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block p-2.5" placeholder="•••••••••" required/>
            </div> 
        </div>
        </div>
        </div>
        
        </>
    );
}