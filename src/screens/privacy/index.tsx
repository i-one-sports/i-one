import TwLayout from '@/components/layouts/Tw'
import { Box, Typography, Container } from '@mui/material'
import * as React from 'react'

const Privacy = () => {
  return (
    <TwLayout>
      <Container maxWidth="md" sx={{ py: 4, pt: { xs: 10, md: 10 } }}>
        <Typography
          variant="h3"
          component="h1"
          sx={{
            fontFamily: "'Poppins', serif",
            fontWeight: 700,
            fontSize: { xs: '1.75rem', md: '2.5rem' },
            color: '#1a1a1a',
            mb: 4,
            textAlign: 'center',
          }}
        >
          Privacy Policy
        </Typography>

        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
          }}
        >
          <Section title="1. Introduction">
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.8,
                color: '#4a4a4a',
                fontFamily: "'Poppins', serif",
              }}
            >
              At Ione, we value your privacy and are committed to protecting
              your personal information. This Privacy Policy outlines how we
              collect, use, disclose, and safeguard your data when you use our
              platform to schedule matches, book sessions, create team
              formations, join teams, and track your stats.
            </Typography>
          </Section>

          <Section title="2. Information We Collect">
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.8,
                color: '#4a4a4a',
                fontFamily: "'Poppins', serif",
              }}
            >
              <strong>Personal Information:</strong> Name, email address, phone
              number, and profile information when you create an account.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.8,
                color: '#4a4a4a',
                mt: 1,
                fontFamily: "'Poppins', serif",
              }}
            >
              <strong>Usage Data:</strong> Match schedules, team formations,
              player statistics, and activity logs.
            </Typography>
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.8,
                color: '#4a4a4a',
                mt: 1,
                fontFamily: "'Poppins', serif",
              }}
            >
              <strong>Device Data:</strong> IP address, browser type, and device
              identifiers.
            </Typography>
          </Section>

          <Section title="3. How We Use Your Information">
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.8,
                color: '#4a4a4a',
                fontFamily: "'Poppins', serif",
              }}
            >
              We use your information to provide and improve our services,
              including:
            </Typography>
            <Box
              component="ul"
              sx={{
                pl: 2,
                mt: 1,
                color: '#4a4a4a',
                lineHeight: 1.8,
                fontFamily: "'Poppins', serif",
              }}
            >
              <li>Scheduling matches and booking game slots</li>
              <li>Managing team formations and player rosters</li>
              <li>Tracking individual and team statistics</li>
              <li>Communicating with you about updates and events</li>
              <li>Ensuring platform security and preventing fraud</li>
            </Box>
          </Section>

          <Section title="4. Information Sharing">
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.8,
                color: '#4a4a4a',
                fontFamily: "'Poppins', serif",
              }}
            >
              We do not sell your personal information. We may share your data
              with:
            </Typography>
            <Box
              component="ul"
              sx={{ pl: 2, mt: 1, color: '#4a4a4a', lineHeight: 1.8 }}
            >
              <li>Team members and organizers for match coordination</li>
              <li>Service providers who assist with our operations</li>
              <li>Legal authorities when required by law</li>
            </Box>
          </Section>

          <Section title="5. Data Security">
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.8,
                color: '#4a4a4a',
                fontFamily: "'Poppins', serif",
              }}
            >
              We implement appropriate technical and organizational measures to
              protect your personal information against unauthorized access,
              alteration, disclosure, or destruction. However, no method of
              transmission over the internet is 100% secure.
            </Typography>
          </Section>

          <Section title="6. Your Rights">
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.8,
                color: '#4a4a4a',
                fontFamily: "'Poppins', serif",
              }}
            >
              You have the right to access, update, or delete your personal
              information. You may also opt-out of certain data collection or
              communications. To exercise these rights, contact us through the
              app or email support.
            </Typography>
          </Section>

          <Section title="7. Children's Privacy">
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.8,
                color: '#4a4a4a',
                fontFamily: "'Poppins', serif",
              }}
            >
              Our services are not intended for individuals under the age of 13.
              We do not knowingly collect personal information from children.
            </Typography>
          </Section>

          <Section title="8. Changes to This Policy">
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.8,
                color: '#4a4a4a',
                fontFamily: "'Poppins', serif",
              }}
            >
              We may update this Privacy Policy from time to time. We will
              notify you of any material changes by posting the new policy on
              this page and updating the "Last updated" date.
            </Typography>
          </Section>

          <Section title="9. Contact Us">
            <Typography
              variant="body2"
              sx={{
                lineHeight: 1.8,
                color: '#4a4a4a',
                fontFamily: "'Poppins', serif",
              }}
            >
              If you have any questions about this Privacy Policy, please
              contact us through the app or email our support team.
            </Typography>
          </Section>
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
        fontFamily: "'Poppins', serif",
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

export default Privacy
