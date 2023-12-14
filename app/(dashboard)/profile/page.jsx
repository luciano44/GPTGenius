import { UserProfile } from "@clerk/nextjs";

const ProfilePage = () => {
  return (
    <div>
      <UserProfile path="/profile" routing="path" />
    </div>
  );
};
export default ProfilePage;
