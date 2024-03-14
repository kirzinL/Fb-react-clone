import { useState } from "react";

const RecentProfile = () =>{

    let [profile,setProfile] = useState(
        [
            {name:"kirzin",link:"https://scontent.fmnl34-1.fna.fbcdn.net/v/t39.30808-1/419490335_928609532142756_2906081979923292961_n.jpg?stp=dst-jpg_p160x160&_nc_cat=100&ccb=1-7&_nc_sid=5f2048&_nc_ohc=80Whd8ZNSa0AX9vVPzo&_nc_oc=AQnQCOrcCW7UHx-fEBeW9CxTaT3jP_KBMK5Twkn5CO8e9Vx0y7WugoaG77LjVYnBmyeMjrR-Lu4NaKazDER3FfyW&_nc_ht=scontent.fmnl34-1.fna&oh=00_AfAHEWdHjPqR6jBZY3V2n5kcGOFSmsXGgLAghGXNsnuhqg&oe=65F7C755",id:1},
            {name:"Angel",link:"https://scontent.fmnl34-1.fna.fbcdn.net/v/t1.18169-1/27540398_1772779469694682_8724221103540299350_n.jpg?stp=dst-jpg_p160x160&_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_ohc=mjO-GzUp-mIAX-fTiIT&_nc_ht=scontent.fmnl34-1.fna&oh=00_AfCqhYc3yAoErY5RPW31sQjgQYldHQIf_X_UhuMvFF7-bw&oe=661A5310",id:2},
           
        ]
    )
    return(
        <div className="RecentContainer">
           
           {profile.map((profile)=>(

                <div className="recentCard" key={profile.id}>
                    <div className="card" >
               <img src={profile.link}></img>
                <div className="card-body">
                   
                    <p className="card-text">{profile.name}</p>
           
                </div>
                </div>
                                
                </div>

           ))}
        </div>
    );
}

export default RecentProfile;