const MyTable = ({ data }) => {
  return (
    <table className="">
      <thead>
        <tr></tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td className="text-lg 4xl:text-2xl xl:text-xl special:text-3xl md:text-xl font-semibold p-4  lg:text-xl">
              {item.name}
            </td>
            <td className="text-lg 4xl:text-2xl xl:text-xl special:text-3xl md:text-xl font-semibold p-4  lg:text-xl">
              {item.description}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// Sample data
const sampleData = [
  { id: 1, name: "Promotion name", description: "WINLADS" },
  { id: 2, name: "Eligible States/Territories", description: "National" },
  {
    id: 3,
    name: "Promotion period",
    description:
      "Promotion period	Start: 26 Dec 2023 09:00 End: 25 Feb 2024 17:30 No entries will be accepted outside this time.",
  },
  {
    id: 4,
    name: "Website address",
    description: "Website address	www.winlads.com",
  },
  {
    id: 5,
    name: "Promoter",
    description:
      "WINLADSABN: 87671535149 2009/15 everage street Moonee Ponds VIC 3039",
  },
  {
    id: 6,
    name: "Eligible entrants",
    description:
      "Eligible entrants	Entry to the Promotion is open to Australian residents in all eligible states/territories who fulfil the method of entry requirements.",
  },
  {
    id: 7,
    name: "Details of prizes ",
    description:
      "Mazda BT50 Ute Driveaway.  5 year warranty.Registration will be paid and transfer will be done by winlads. All costs included.75000$ RRP Or ElseIf Winner don’t want the UTE , entrant can claim 65,000$ cash price.It is either Ute or Cash price",
  },
  { id: 8, name: "Total number of prizes", description: "1" },
  {
    id: 9,
    name: "Total prize value",
    description: "Total prize pool (inc GST): $75,000.00",
  },
  {
    id: 10,
    name: "Method of entry",
    description:
      "To enter, an entrant must, during the promotional period Each subscription package comes with a pre-defined number of entries. To enter the competition, please visit the competition website and fill out the necessary information on the online entry form as per the instructions provided on the website. Entrants have the option to subscribe to a monthly package or purchase entries for the specified drawing. It is mandatory to sign up through the website and submit the required information to validate the entry.",
  },
  {
    id: 11,
    name: "Maximum number of entries",
    description: "Unlimited",
  },
  {
    id: 12,
    name: "Prize draw ",
    description:
      "A random prize draw, in the presence of an independent scrutineer, will occur 23: 59 on 27 Feb 2024 Location of draw: Trade Promotions and Lotteries Pty Ltd Level 2 11 York Street Sydney NSW 2000 ",
  },
  {
    id: 13,
    name: "Notification of winners ",
    description:
      "Notification of winners 	Winners will be notified via Email & phone no later than 27 Feb 2024. ",
  },
  {
    id: 14,
    name: "Public announcement of winners",
    description:
      "The winners of all prizes will be published here:www.winlads.com on 29 Feb 2024",
  },

  {
    id: 15,
    name: "Unclaimed prize draw",
    description:
      "A random unclaimed prize draw, in the presence of an independent scrutineer, will occur 14:00 on 27 May 2024 Location of draw:Trade Promotions and Lotteries Pty Ltd Level 2 11 York Street Sydney NSW 2000",
  },
  {
    id: 16,
    name: "Notification of unclaimed prize winners",
    description:
      "Unclaimed prize winners will be notified via Email & phone no later than 27 May 2024",
  },
  {
    id: 17,
    name: "Public announcement of winners from unclaimed prize draw",
    description:
      "The winners of all unclaimed prizes will be published here:www.winlads.com on 29 May 2024",
  },
  {
    id: 18,
    name: " Permit reference",
    description:
      "Authorised under NSW Authority No. TP/xxxxx SA Permit No. T23/xxxx ACT Permit No. TP 23/0xxxx",
  },
];



function TermsCondition() {
  return (
    <div
      style={{
        background: "linear-gradient(88deg, #43E3ED -21.82%, #FFE9E9 131.12%)"
      }}
    >
      <div className="">
        <div className="">
          <p className="text-lg 4xl:text-8xl xl:text-6xl special:text-8xl md:text-4xl font-bold uppercase tracking-widest p-4 text-center lg:text-4xl lg:text-center 4xl:text:center xl:text-center">
            TERMS & CONDITIONS
          </p>
        </div>
        <div className="">
          <p className="text-lg 4xl:text-6xl xl:text-4xl special:text-8xl md:text-4xl font-semibold	   p-4 text-center lg:text-4xl lg:text-left 4xl:text:left xl:text-left">
            Schedule to Terms & Conditions of Entry
          </p>
        </div>
        <MyTable data={sampleData} />
      </div>
    </div>
  );
}

export default TermsCondition;
