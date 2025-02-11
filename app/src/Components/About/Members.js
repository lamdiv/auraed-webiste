import facebookSvg from '../../assets/facebook.svg';
import twitterSvg from '../../assets/twitter.svg';
import instagramSvg from '../../assets/instagram.svg';
import linkedinSvg from '../../assets/linkedin.svg';
import githubSvg from '../../assets/github.svg';

function Members() {
  const members = [
    {
      name: 'Roman Shrestha',
      imageLink:
        'https://media.discordapp.net/attachments/980147436196597820/1023048038723375165/romanpic.png',
      position: 'Co-Founder',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    },
    {
      name: 'Samrid Pandit',
      imageLink:
        'https://media.discordapp.net/attachments/980147436196597820/1013205461329248338/unknown.png',
      position: 'Technical Lead',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    },
    {
      name: 'Sovit Lekhak',
      imageLink:
        'https://media.discordapp.net/attachments/980147436196597820/1013209746267967531/unknown.png',
      position: 'Backend Developer/Executive Committee Member',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    },
    {
      name: 'Diwas Lamichhane',
      imageLink:
        'https://scontent.fkep2-1.fna.fbcdn.net/v/t39.30808-6/300195356_3888257658073410_6979674478170402837_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_ohc=1h7K7pJDAGQAX8zxqOy&_nc_ht=scontent.fkep2-1.fna&oh=00_AT84FukHsTu2Eg2dS7Z1Qa4G1N0i72gGlpIPZRB-1fmSog&oe=63319CF7',
      position: 'Frontend Developer',
      socialLinks: [
        {
          link: 'https://facebook.com',
        },
      ],
    },
  ];
  return (
    <section id="members" class="mt-20">
      <div class="container px-2 mx-auto flex flex-col md:px-0">
        {/* <!-- Album Info --> */}
        <div class="self-center text-center space-y-3">
          <h2 class="text-3xl font-bold">Meet Our Team</h2>
          <p class="text-sm max-w-2xl font-semibold text-dark">
            We are a non-profit organization focusing on child education with
            technology.
          </p>
        </div>

        {/* <!--  Cards --> */}
        <div class="flex flex-col justify-between mt-10 space-y-5 md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 md:space-y-0">
          {/* <!-- Memeber 1 --> */}
          {members.map((member, idx) => (
            <div key={idx} class="relative cursor-pointer ">
              <img
                class="rounded-xl w-full h-[200px] md:h-[300px] object-cover"
                src={member.imageLink}
                alt=""
              />
              <div class="absolute flex flex-col p-6 rounded-b-xl justify-between bottom-0 w-full h-3/3 bg-primary bg-opacity-70">
                <div class=" self-right text-center justify-between text-white">
                  <h4 class="text-xl font-bold">{member.name}</h4>
                  <p class="mt-1 text-md font-semibold">{member.position}</p>
                </div>
                {/* <!-- Social Links --> */}
                <div class="flex justify-center space-x-2 pt-2">
                  <a
                    class="w-[8px] h-[9px] text-primary"
                    href={member.socialLinks[0].link}
                  >
                    <img src={facebookSvg} alt="facebook" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Members;
