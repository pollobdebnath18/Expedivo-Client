import UpdateProfile from "@/components/UpdateProfile";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";
import Image from "next/image";

const ProfilesPage = async () => {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  const user = session?.user;

  if (!user) {
    return (
      <div className="h-screen flex items-center justify-center">
        <p className="text-gray-500">User not found</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold">My Profile</h1>
        <p className="text-gray-500 mt-2">Manage your personal information</p>
      </div>

      {/* Card */}
      <div className="bg-white shadow-xl rounded-2xl p-8 flex flex-col md:flex-row items-center gap-8">
        {/* Avatar */}
        <div className="flex flex-col items-center gap-6 rounded-full">
          <div className="w-[120px] h-[120px] rounded-full overflow-hidden border-4 border-cyan-500">
            <Image
              src={user.image}
              alt={user.name}
              width={120}
              height={120}
              className="w-full h-full object-cover"
            />
          </div>

          <UpdateProfile></UpdateProfile>
        </div>

        {/* Info */}
        <div className="flex-1 space-y-3 text-center md:text-left">
          <h2 className="text-2xl font-semibold">{user.name}</h2>

          <p className="text-gray-600">
            <span className="font-medium">Email:</span> {user.email}
          </p>

          <p className="text-gray-600">
            <span className="font-medium">User ID:</span> {user.id}
          </p>

          <p className="text-gray-600">
            <span className="font-medium">Verified:</span>{" "}
            {user.emailVerified ? (
              <span className="text-green-600 font-medium">Yes</span>
            ) : (
              <span className="text-red-500 font-medium">No</span>
            )}
          </p>

          <p className="text-gray-500 text-sm">
            Joined: {new Date(user.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="bg-cyan-50 p-6 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-cyan-600">12</h3>
          <p className="text-gray-600">Bookings</p>
        </div>

        <div className="bg-cyan-50 p-6 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-cyan-600">5</h3>
          <p className="text-gray-600">Countries</p>
        </div>

        <div className="bg-cyan-50 p-6 rounded-xl text-center">
          <h3 className="text-2xl font-bold text-cyan-600">3</h3>
          <p className="text-gray-600">Years Active</p>
        </div>
      </div>
    </div>
  );
};

export default ProfilesPage;
