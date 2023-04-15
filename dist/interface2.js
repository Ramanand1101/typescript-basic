const ramanand = { dbId: 22, email: "r@gmail.com", userId: 222,
    githubToken: "ramanand@1233",
    startTrail: () => {
        return "trail started";
    },
    role: "Admin",
    getCoupan: (name, Off) => {
        return 10;
    }
};
ramanand.email = "rn@gmail.com";


/* Output 
{
  dbId: 22,
  email: 'rn@gmail.com',
  userId: 222,
  githubToken: 'ramanand@1233',
  startTrail: [Function: startTrail],
  role: 'Admin',
  getCoupan: [Function: getCoupan]
}
*/