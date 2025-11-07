import Card from "./components/cards";

export default function App () {
  const jobOpenings = [
    {
      brandLogo: "https://logo.clearbit.com/google.com",
      companyName: "Google",
      datePosted: "2 days ago",
      jobTitle: "Frontend Developer",
      jobType: "Full-time",
      jobLevel: "Intermediate",
      salary: "$60/hr",
      location: "Kathmandu, Nepal"
    },
    {
      brandLogo: "https://logo.clearbit.com/microsoft.com",
      companyName: "Microsoft",
      datePosted: "5 days ago",
      jobTitle: "Backend Engineer",
      jobType: "Full-time",
      jobLevel: "Senior",
      salary: "$85/hr",
      location: "Kathmandu, Nepal"
    },
    {
      brandLogo: "https://logo.clearbit.com/meta.com",
      companyName: "Meta",
      datePosted: "1 day ago",
      jobTitle: "UI/UX Designer",
      jobType: "Part-time",
      jobLevel: "Intermediate",
      salary: "$40/hr",
      location: "Lalitpur, Nepal"
    },
    {
      brandLogo: "https://logo.clearbit.com/amazon.com",
      companyName: "Amazon",
      datePosted: "7 days ago",
      jobTitle: "Cloud Support Engineer",
      jobType: "Full-time",
      jobLevel: "Entry",
      salary: "$55/hr",
      location: "Kathmandu, Nepal"
    },
    {
      brandLogo: "https://logo.clearbit.com/netflix.com",
      companyName: "Netflix",
      datePosted: "3 days ago",
      jobTitle: "Data Analyst",
      jobType: "Full-time",
      jobLevel: "Intermediate",
      salary: "$65/hr",
      location: "Pokhara, Nepal"
    },
    {
      brandLogo: "https://logo.clearbit.com/spotify.com",
      companyName: "Spotify",
      datePosted: "4 days ago",
      jobTitle: "DevOps Engineer",
      jobType: "Full-time",
      jobLevel: "Senior",
      salary: "$90/hr",
      location: "Kathmandu, Nepal"
    },
    {
      brandLogo: "https://logo.clearbit.com/adobe.com",
      companyName: "Adobe",
      datePosted: "6 days ago",
      jobTitle: "Graphic Designer",
      jobType: "Part-time",
      jobLevel: "Entry",
      salary: "$30/hr",
      location: "Lalitpur, Nepal"
    },
    {
      brandLogo: "https://logo.clearbit.com/tesla.com",
      companyName: "Tesla",
      datePosted: "8 days ago",
      jobTitle: "Electrical Engineer",
      jobType: "Full-time",
      jobLevel: "Intermediate",
      salary: "$70/hr",
      location: "Kathmandu, Nepal"
    },
    {
      brandLogo: "https://logo.clearbit.com/intel.com",
      companyName: "Intel",
      datePosted: "5 days ago",
      jobTitle: "AI Researcher",
      jobType: "Full-time",
      jobLevel: "Senior",
      salary: "$110/hr",
      location: "Kathmandu, Nepal"
    },
    {
      brandLogo: "https://logo.clearbit.com/nvidia.com",
      companyName: "NVIDIA",
      datePosted: "2 days ago",
      jobTitle: "Machine Learning Engineer",
      jobType: "Full-time",
      jobLevel: "Intermediate",
      salary: "$95/hr",
      location: "Bhaktapur, Nepal"
    }
  ];


  return (
    <div className="parent">
      {jobOpenings.map(function(elem) {
        return <Card company = {elem.companyName} 
          datePosted = {elem.datePosted}
          jobTitle = {elem.jobTitle}
          jobType = {elem.jobType}
          jobLevel ={elem.jobLevel}
          salary = {elem.salary}
          location = {elem.location}
          brandLogo = {elem.brandLogo}
        />
      })}
    </div>
  )
}