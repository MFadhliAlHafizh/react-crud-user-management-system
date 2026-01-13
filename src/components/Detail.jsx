import { PrimaryButton, SecondaryButton } from "../Elements/Button/Button";

function Detail({ setAction, user }) {
  return (
    <div className="flex justify-center items-center p-7">
      <div className="w-full max-w-4xl">
        <h1 className="text-3xl text-primaryColor font-bold text-center mb-12 tracking-wider">
          Users Detail
        </h1>
        <div className="max-w-full p-4 bg-white shadow-[0_3px_10px_rgb(0,0,0,0.2)]">
          <div className="w-full">
            <div className="flex gap-6">
              <div className="w-40 h-40 bg-gray-400 rounded-md"></div>
              <div className="flex flex-col gap-2">
                <h3 className="text-2xl text-slate-800 font-semibold tracking-wide">
                  {user.name} | {user.username}
                </h3>
                <div className="h-2 w-24 rounded-full bg-primaryColor mb-2"></div>
                <div className="grid grid-cols-[80px_1fr] gap-2">
                  <p className="text-slate-800 font-bold tracking-wide">Email</p>
                  <span className="text-primaryColor hover:underline cursor-pointer">: {user.email}</span>

                  <p className="text-slate-800 font-bold tracking-wide">Phone</p>
                  <span className="font-normal">: {user.phone}</span>

                  <p className="text-slate-800 font-bold tracking-wide">Website</p>
                  <span className="font-normal">: {user.website}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-end gap-2 mt-5">
          <SecondaryButton onClick={() => setAction(null)}>
            Back
          </SecondaryButton>
          <PrimaryButton onClick={() => setAction("update")}>
            Update
          </PrimaryButton>
        </div>
      </div>
    </div>
  );
}

export default Detail;
