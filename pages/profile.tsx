import Nav from '../components/nav'
import Skills from '../components/profile/skills'
import Tags from '../components/profile/tags'

const skills = [
  'JavaScript',
  'TypeScript',
  'React.js',
  'React Native',
  'Node.js',
  'Express.js',
  'GraphQL',
  'Apollo Client',
  'Apollo Server',
  'Prisma',
  'AWS S3',
  'Heroku',
  'Netlify',
]

export default function Profile() {
  return (
    <>
      <Nav />
      <div className='hero'>
        <h1 className='title'>Profile</h1>
      </div>
      <div className='grid md:gap-8 grid-cols-1 md:grid-cols-3 mx-8 md:mx-32'>
        {/* Left side in md */}
        <div className='col-span-1'>
          {/* Profile Info */}
          <div className='border-b-2 pb-4 mb-4'>
            <h1 className='text-3xl font-medium mb-2'>유예빈 (Yebin Yu)</h1>
            <p className='text-base leading-loose'>
              <svg
                className='w-5 h-5 inline mr-2'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M0 3v18h24v-18h-24zm21.518 2l-9.518 7.713-9.518-7.713h19.036zm-19.518 14v-11.817l10 8.104 10-8.104v11.817h-20z' />
              </svg>
              yuyaebean@gmail.com
            </p>
            <p className='text-base leading-loose'>
              <svg
                className='w-5 h-5 inline mr-2'
                xmlns='http://www.w3.org/2000/svg'
                viewBox='0 0 24 24'
              >
                <path d='M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z' />
              </svg>
              yuyaebean
            </p>
          </div>
          {/* Skills */}
          <div className='border-b-2 pb-2 mb-4'>
            <h2 className='text-3xl pl-3 border-l-4 border-teal-400 mb-6'>
              Technical Skills
            </h2>
            <Skills names={skills} />
          </div>
        </div>

        {/* Right side in md */}
        <div className='col-span-2'>
          <div className='border-b-2 pb-4 mb-10'>
            <h2 className='text-3xl pl-3 border-l-4 border-teal-400 mb-6'>
              Projects
            </h2>
            <div className='mb-6'>
              <h3 className='text-lg font-medium text-teal-600 mb-2'>
                Tarrazu Blog
              </h3>
              <div className='ml-4'>
                <p className='mb-2'>
                  이 블로그 프로젝트 입니다. 개발하면서 필요한 팁, 프로젝트를
                  진행하면서 느낀 부분들에 대한 회고록 등을 작성하는
                  블로그입니다.
                </p>
                <Tags
                  names={[
                    'TypeScript',
                    'React.js',
                    'Next.js',
                    'Server-side Rendering',
                    'Vercel (formerly ZEIT)',
                  ]}
                />
                <a
                  href='https://github.com/yuyaebean/tarrazu_blog'
                  target='_blank'
                  className='underline italic'
                >
                  GitHub Link
                </a>
              </div>
            </div>
            <div className='mb-6'>
              <h3 className='text-lg font-medium text-teal-600 mb-2'>
                멋쟁이 사자처럼 명지대(자연) 홈페이지
              </h3>
              <div className='ml-4'>
                <p className='mb-2'>
                  멋쟁이 사자처럼 명지대(자연) 공식 사이트입니다. 지원서 제출,
                  과제 제출, 일정 공유 등을 할 수 있습니다.
                </p>
                <Tags
                  names={[
                    'TypeScript',
                    'React.js',
                    'GraphQL',
                    'Apollo Client',
                    'Apollo Server',
                    'Node.js',
                    'Prisma',
                    'Postgresql',
                    'Google Analytics',
                    'Netlify',
                    'Heroku',
                  ]}
                />
                <a
                  href='https://github.com/mju-likelion/official-server'
                  target='_blank'
                  className='underline italic'
                >
                  GitHub Link (Server)
                </a>
                <br />
                <a
                  href='https://github.com/mju-likelion/official-web'
                  target='_blank'
                  className='underline italic'
                >
                  GitHub Link (Client)
                </a>
              </div>
            </div>
            <div className='mb-4'>
              <h3 className='text-lg font-medium text-teal-600 mb-2'>
                한양대학교 부동산융합대학원 원우회 연락처
              </h3>
              <div className='ml-4'>
                <p className='mb-2'>
                  한양대학교 부동산융합대학원 원우회 내부용 연락처 공유
                  서비스입니다. 관리자용 웹사이트를 구축하여 전공, 기수, 유저를
                  관리할 수 있도록 하였고, 어플에서는 사용자 정보 공유, 교수진
                  연락처 공유, 내 정보 수정, 공지사항 확인을 할 수 있습니다.
                </p>
                <Tags
                  names={[
                    'JavaScript',
                    'React.js',
                    'React Native',
                    'GraphQL',
                    'Apollo Client',
                    'Apollo Server',
                    'Node.js',
                    'Prisma',
                    'Postgresql',
                    'Netlify',
                    'Heroku',
                  ]}
                />
                <a
                  href='https://github.com/yuyaebean/hure_backend'
                  target='_blank'
                  className='underline italic'
                >
                  GitHub Link (Server)
                </a>
                <br />
                <a
                  href='https://github.com/yuyaebean/hure_admin_frontend'
                  target='_blank'
                  className='underline italic'
                >
                  GitHub Link (Admin Client)
                </a>
                <br />
                <a
                  href='https://github.com/InSooBae/HYRE-App'
                  target='_blank'
                  className='underline italic'
                >
                  GitHub Link (App)
                </a>
              </div>
            </div>
          </div>
          <div className='border-b-2 pb-4 mb-10'>
            <h2 className='text-3xl pl-3 border-l-4 border-teal-400 mb-6'>
              Activities
            </h2>
            <div className='mb-6'>
              <h3 className='text-lg font-medium text-teal-600 mb-2'>
                멋쟁이 사자처럼
              </h3>
              <div className='ml-4'>
                <p className='mb-2'>
                  멋쟁이 사자처럼 명지대(자연)에 2019년 9월에 들어와서, 현재
                  멋쟁이 사자처럼 명지대(자연) 8기 (2020년) 대표를 맡고
                  있습니다. 멋쟁이 사자처럼은 이두희 대표를 필두로 2019년까지는
                  "내가 직접 프로그래밍 하겠다.", "Hack your life!"를
                  캐치프레이즈로 하여 비전공자들 혹은 전공자 중에 웹프로그래밍을
                  직접 하지 못하는 사람들에게 스스로 만들고 싶은 서비스를 만들
                  수 있도록 교육해주는 코딩 교육 동아리였습니다만, 2020년에는
                  "스타트업 사관학교"로 새로운 발돋움을 준비하고 변화해 가는
                  중입니다. 자신이 원하는 아이디어로 스스로 서비스를 만들고, 더
                  나아가 세상을 바꾸는 서비스로 창업을 하는 것까지를 목표로 삼고
                  있는 동아리이자 단체입니다.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
