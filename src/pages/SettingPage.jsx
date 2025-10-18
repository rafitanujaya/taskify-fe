import { useUser } from "../hooks/useUser"

const SettingPage = () => {
    const {user} = useUser()
    
  return (
    <section className="w-full bg-gray-50 p-8">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Setting</h2>

        <section className="w-full bg-white border border-gray-300 p-6 rounded-2xl">
            <h3 className="text-lg font-semibold text-gray-800 mb-7">Profile</h3>

            <div className="space-y-6">
                <div className="w-full border border-gray-300 rounded-2xl  flex items-center gap-6 p-5">
                    <img src="https://i.pravatar.cc/100?img=36" alt="" className="h-20 w-20 rounded-full object-cover" />
                    <div>
                        <h4 className="mb-2 text-lg font-semibold text-gray-800">{user?.username}</h4>
                        <div className="flex gap-2 items-center">
                            <p className="text-sm text-gray-500">Software Engineer</p>
                            <div className="h-3.5 w-px bg-gray-300"></div>
                            <p className="text-sm text-gray-500">Bandung, Indonesia</p>
                        </div>
                    </div>
                </div>

                <div className="w-full border border-gray-300 rounded-2xl gap-6 p-5">
                    <h4 className="text-lg font-semibold mb-6 ">personal Information</h4>

                    <div>
                        <p className="mb-2 text-xs text-gray-500 leading-normal">Email Address</p>
                        <p className="text-sm font-medium text-gray-800 ">{user?.email}</p>
                    </div>
                </div>

            </div>


        </section>
    </section>
  )
}

export default SettingPage
