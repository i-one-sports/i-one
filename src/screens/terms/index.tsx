import TwLayout from '@/components/layouts/Tw'
import { Box, Typography, Container } from '@mui/material'
import * as React from 'react'
import { Link } from 'react-router-dom'

const COMPANY = {
  rcNumber: '9144447',
  address: '27 reverend adegoke canal estate, okota lagos',
  supportEmail: 'Marvellousezemba@i-one-sports.com',
  phone: '09048122205',
}

const FONT = "'Poppins', serif"
const textSx = { lineHeight: 1.8, color: '#4a4a4a', fontFamily: FONT }

const PrivacyLink = () => (
  <Link to="/privacy" className="text-primary underline">
    Privacy Policy
  </Link>
)

type Item = { title?: string; body: React.ReactNode; bullets?: string[] }
type SectionData = { title: string; intro?: React.ReactNode; items?: Item[] }

const SECTIONS: SectionData[] = [
  {
    title: '1. About these terms',
    intro:
      "By creating an account or using the i-One app, you agree to these terms. If you don't agree, don't use i-One.",
    items: [
      {
        title: 'Who we are.',
        body: `i-One is run by I-ONE SPORTS LTD, a company registered in Nigeria (RC ${COMPANY.rcNumber}), at ${COMPANY.address}. "We", "us" and "i-One" mean that company.`,
      },
      {
        title: 'What i-One does.',
        body: 'i-One helps people find football pitches, join or organise games ("sessions"), run tournaments, and pay for them. Pitch owners use it to list pitches, take bookings and receive payments.',
      },
      {
        title: 'We are a platform.',
        body: 'Pitches are owned and run by pitch owners, not by us. Sessions and tournaments are organised by users. We provide the app, the payments and the records.',
      },
      {
        title: 'Other documents.',
        body: (
          <>
            Our <PrivacyLink /> explains how we use your personal data. Payments
            are processed by Paystack, whose terms also apply when you pay.
          </>
        ),
      },
      {
        title: 'Changes.',
        body: "We may update these terms. We'll tell you in the app at least 14 days before a material change takes effect. If you keep using i-One after that, the new terms apply.",
      },
    ],
  },
  {
    title: '2. Who can use i-One and your account',
    items: [
      {
        title: 'Age.',
        body: 'You must be at least 13 to use i-One. If you are under 18, a parent or guardian must agree to these terms for you and is responsible for any payments you make.',
      },
      {
        title: 'Schools and academies.',
        body: "A school or academy that adds young players is responsible for having their parents' or guardians' consent first.",
      },
      {
        title: 'One account, real details.',
        body: 'Use your real name, phone number and position. Keep your login private. You are responsible for everything done on your account.',
      },
      {
        title: 'Pitch owners and organisers',
        body: 'who receive money must complete identity checks (KYC) and add a Nigerian bank account in their own name.',
      },
      {
        title: 'Closing your account.',
        body: 'You can close your account at any time from the app. Money you are owed is paid out first, and records we must keep by law are kept.',
      },
    ],
  },
  {
    title: '3. Sessions, teams, referees and ratings',
    items: [
      {
        title: 'Sessions.',
        body: 'A session is one game day at a pitch, made up of short games ("sets"). The captain who creates it sets the time, size and rules shown in the app.',
      },
      {
        title: 'Teams.',
        body: 'The app shuffles players into teams using ratings and positions. The captain may adjust teams. Teams are made to be fair, not guaranteed to be equal.',
      },
      {
        title: 'Referees.',
        body: "A session's referee records goals, assists and results in the app. Anyone acting as referee, including a guest using Referee mode, must record events honestly. Sessions played without a referee may have no stats.",
      },
      {
        title: 'Ratings, votes and badges.',
        body: 'Your rating, Player of the Session votes, awards and badges (such as "007") are worked out automatically from recorded results and votes. They are for fun and motivation, not a professional assessment. Votes are anonymous; you can\'t vote for yourself.',
      },
      {
        title: 'Fair records.',
        body: "Don't record false results, edit your own stats, trade votes or use extra accounts. We may correct records and remove ratings, awards or badges that were gained unfairly.",
      },
    ],
  },
  {
    title: '4. Payments, refunds and monthly passes',
    items: [
      {
        title: 'Prices.',
        body: "Pitch owners set their prices. Before you pay, the app shows the full amount, including i-One's service fee and the payment processing fee. All amounts are in Naira.",
      },
      {
        title: 'How you pay.',
        body: 'Payments go through Paystack. We never see or store your full card details.',
      },
      {
        title: 'Hourly pitches.',
        body: 'The pitch price for the session is shared among the players. Pay within the deadline shown (usually 24 hours after the session fills) or your place may be given to someone else.',
      },
      {
        title: 'Leaving a session.',
        body: "If you leave before the session is played, we request a refund of what you paid. If the session's total has already been fully paid, leaving may not be refunded; the app tells you before you confirm.",
      },
      {
        title: 'Cancelled sessions.',
        body: 'If a session is cancelled by the captain, the pitch owner or us, everyone who paid is refunded.',
      },
      {
        title: 'Refunds.',
        body: 'Refunds go back to the card or account you paid with and can take up to 10 business days to arrive. The processing fee is not refunded, because the payment processor keeps it.',
      },
      {
        title: 'Monthly passes.',
        body: 'At a pitch that charges monthly, you need a monthly pass to join its sessions.',
        bullets: [
          'A pass is for one player at one pitch and lasts 30 days from purchase. It covers sessions that start within those 30 days.',
          'It covers regular sessions only, not tournaments.',
          "Leaving or missing a session doesn't refund or shorten your pass. Renewing early adds 30 days to the end.",
          'If the pitch owner switches from monthly to hourly pricing, your pass ends at once and you are refunded for the unused days.',
          'Otherwise passes are not refundable once bought, except where the law requires.',
        ],
      },
      {
        title: 'Wallets and withdrawals.',
        body: 'Money owed to you (as a pitch owner, organiser or prize winner) is held in your i-One wallet. You can withdraw it to a verified Nigerian bank account in your name. We may delay or hold a withdrawal while we check suspected fraud or a dispute.',
      },
      {
        title: 'Chargebacks.',
        body: 'Contact us before disputing a payment with your bank. A chargeback on a legitimate payment may lead to your account being suspended.',
      },
    ],
  },
  {
    title: '5. Tournaments',
    items: [
      {
        title: 'Organisers.',
        body: 'Any user can organise a tournament. The organiser sets the format, fees, prizes and dates, books the pitches through the app, and assigns a referee to every match. The organiser is responsible for running the event as advertised.',
      },
      {
        title: 'Entry fees.',
        body: "Players or teams pay only the entry fee shown. It already includes the pitch; players are never asked for a pitch share in a tournament. Monthly passes don't apply.",
      },
      {
        title: 'Where the money goes.',
        body: "Entry fees are held by i-One. Pitch owners are paid their hire fee when entries close. Prize money is paid after the final into the winning captain's wallet. What is left goes to the organiser. i-One keeps only its service fee.",
      },
      {
        title: 'Prizes.',
        body: "The captain receives the prize on the team's behalf and is responsible for sharing it with teammates as the team agreed. Prizes are paid only after any dispute about the final is settled.",
      },
      {
        title: 'Solo players.',
        body: "Players who join alone are placed into teams by rating when entries close. If there aren't enough players to make a full team, those left over are refunded in full.",
      },
      {
        title: 'Not enough entries.',
        body: "If the tournament isn't full by the deadline, the organiser can extend the deadline or cancel it.",
      },
      {
        title: 'Refunds.',
        body: '',
        bullets: [
          'Tournament cancelled before teams are confirmed: everyone is refunded in full, including the service fee.',
          'You withdraw before entries close: your entry fee is refunded; the service fee is not.',
          'You withdraw after entries close: no refund.',
          'Cancelled after pitch owners have been paid: refunds follow the rules shown in the app for that tournament.',
        ],
      },
      {
        title: 'Results and awards.',
        body: "The referee's recorded results decide standings. Captains can dispute a result in the app within 10 minutes of full time, and the organiser decides. Awards voted by players follow the voting rules shown in the app.",
      },
    ],
  },
  {
    title: '6. Pitch owners',
    items: [
      {
        title: 'Listings.',
        body: 'Your pitch details, photos, opening hours and prices must be accurate. You must have the right to let the pitch for football.',
      },
      {
        title: 'Pricing.',
        body: "A paid pitch charges either hourly or monthly, never both. A monthly pitch also sets a separate hourly price for tournament hire. If you switch from monthly to hourly, your players' passes end and their unused days are refunded from your wallet. A price change applies to new bookings and new or renewed passes, not to ones already paid for.",
      },
      {
        title: 'Bookings.',
        body: "Keep sessions and approved tournament bookings you've accepted. If you must cancel, do it in the app as early as possible so players are refunded.",
      },
      {
        title: 'Payouts.',
        body: "Session payments and passes are credited to your wallet, less i-One's commission, once the payment clears. Tournament hire fees are credited when the tournament's entries close. If you cancel after being paid, the amount is taken back from your wallet or future payouts.",
      },
      {
        title: 'Safety and condition.',
        body: 'You are responsible for keeping the pitch, lighting, goals and facilities safe and as described, and for any permits, insurance and taxes your business needs.',
      },
      {
        title: 'Verification.',
        body: 'We may ask for ID, business and bank details, and may pause payouts until checks are complete.',
      },
    ],
  },
  {
    title: '7. Conduct and safety',
    items: [
      {
        title: 'Play fair and be respectful.',
        body: 'No violence, threats, harassment, discrimination, cheating, or abuse of referees or other players, on the pitch or in the app.',
      },
      {
        title: 'No misuse of the app.',
        body: "Don't create fake accounts, sessions or listings, send spam, scrape data, or try to get around payments or security.",
      },
      {
        title: 'Football has risks.',
        body: "Playing can cause injury. You take part at your own risk and should only play if you are fit to. Neither i-One nor, where the law allows, the pitch owner is responsible for injuries that happen during normal play. Nothing here limits liability for death or injury caused by someone's negligence where the law doesn't allow it.",
      },
      {
        title: 'Your belongings.',
        body: "Look after your own belongings at the pitch. We aren't responsible for lost or stolen items.",
      },
      {
        title: 'Reporting.',
        body: `Report unsafe pitches, abusive behaviour or suspicious payments to us through the app or at ${COMPANY.supportEmail}.`,
      },
    ],
  },
  {
    title: '8. Your content and our app',
    items: [
      {
        title: 'Your content.',
        body: 'You own the photos, names and other content you add. You let us show it in the app and use it to run and promote i-One (for example, a tournament winners post). You can remove it at any time.',
      },
      {
        title: 'Public profile.',
        body: 'Your name, photo, position, stats, rating, awards and badges are visible to other users. The 007 badge is private unless you choose to share it.',
      },
      {
        title: 'Our app.',
        body: "The i-One name, logo, app and designs belong to I-ONE SPORTS LTD. Don't copy or reuse them without our permission.",
      },
    ],
  },
  {
    title: '9. Privacy',
    intro: (
      <>
        We handle your personal data under the Nigeria Data Protection Act 2023,
        as set out in our <PrivacyLink />. Guest referees' phone numbers are
        used only for that event and deleted afterwards.
      </>
    ),
  },
  {
    title: '10. Responsibility and limits',
    items: [
      {
        title: 'The app as it is.',
        body: "We work to keep i-One running and accurate, but we can't promise it will always be available or error-free.",
      },
      {
        title: "What we're not responsible for.",
        body: 'The condition of pitches, what other users do, and losses caused by things outside our reasonable control (such as network or bank outages).',
      },
      {
        title: 'Limit.',
        body: "Where the law allows, our total responsibility to you for any claim is limited to the fees you paid i-One in the 12 months before the claim. This doesn't affect your rights as a consumer under Nigerian law.",
      },
    ],
  },
  {
    title: '11. Suspension and closing accounts',
    intro:
      "We may warn, suspend or close an account that breaks these terms, puts others at risk, or is used for fraud. Where we can, we'll tell you why and let you respond. Money properly owed to you is still paid out, unless the law or an investigation requires us to hold it.",
  },
  {
    title: '12. Disputes and governing law',
    intro:
      "These terms are governed by the laws of the Federal Republic of Nigeria. Contact us first and we'll try to sort it out within 30 days. If we can't, either side may refer the dispute to mediation at the Lagos Multi-Door Courthouse, and then to the courts of Lagos State. Your rights to complain to the Federal Competition and Consumer Protection Commission are not affected.",
  },
  {
    title: '13. Contact',
    intro: `I-ONE SPORTS LTD, ${COMPANY.address}. Email ${COMPANY.supportEmail}, phone ${COMPANY.phone}.`,
  },
]

const Terms = () => {
  return (
    <TwLayout>
      <Container maxWidth="md" sx={{ py: 4, pt: { xs: 10, md: 10 } }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: FONT,
            fontWeight: 700,
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            color: '#1a1a1a',
            mb: 4,
            textAlign: 'center',
          }}
        >
          Terms and Conditions
        </Typography>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {SECTIONS.map(section => (
            <Section key={section.title} title={section.title}>
              {section.intro && (
                <Typography variant="body2" sx={textSx}>
                  {section.intro}
                </Typography>
              )}
              {section.items && (
                <Box
                  component="ol"
                  sx={{
                    ...textSx,
                    pl: 3,
                    mt: section.intro ? 1 : 0,
                    listStyleType: 'decimal',
                    '& > li': { mb: 1, fontSize: '0.875rem' },
                  }}
                >
                  {section.items.map((item, i) => (
                    <li key={i}>
                      {item.title && <strong>{item.title}</strong>} {item.body}
                      {item.bullets && (
                        <Box
                          component="ul"
                          sx={{ pl: 3, mt: 0.5, listStyleType: 'disc' }}
                        >
                          {item.bullets.map(b => (
                            <li key={b}>{b}</li>
                          ))}
                        </Box>
                      )}
                    </li>
                  ))}
                </Box>
              )}
            </Section>
          ))}
        </Box>
      </Container>
    </TwLayout>
  )
}

const Section: React.FC<{ title: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <Box>
    <Typography
      variant="h6"
      sx={{
        fontFamily: FONT,
        fontWeight: 600,
        fontSize: { xs: '1.1rem', md: '1.25rem' },
        color: '#1a1a1a',
        mb: 1.5,
      }}
    >
      {title}
    </Typography>
    {children}
  </Box>
)

export default Terms
