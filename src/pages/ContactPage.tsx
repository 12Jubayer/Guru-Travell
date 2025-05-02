import React from 'react';
import { useTranslation } from 'react-i18next';
import { Phone, Mail, MapPin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  const { t } = useTranslation();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted');
  };

  return (
    <div className="min-h-screen pt-20">
      {/* Header */}
      <div className="relative overflow-hidden bg-cover bg-center py-24" style={{ backgroundImage: 'url(https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1920)' }}>
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50"></div>
        <div className="container-custom relative">
          <div className="max-w-2xl text-white">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {t('contactTitle')}
            </h1>
            <p className="text-lg text-gray-200">
              {t('contactSubtitle')}
            </p>
          </div>
        </div>
      </div>

      {/* Contact Content */}
      <section className="py-16 md:py-24">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input id="name" type="text" className="input" required />
                </div>

                <div>
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input id="email" type="email" className="input" required />
                </div>

                <div>
                  <label htmlFor="subject" className="label">
                    Subject
                  </label>
                  <input id="subject" type="text" className="input" required />
                </div>

                <div>
                  <label htmlFor="message" className="label">
                    {t('message')}
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="input"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-primary inline-flex items-center py-2.5"
                >
                  <Send size={18} className="mr-2" />
                  {t('sendMessage')}
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div>
              <h2 className="mb-6 text-2xl font-bold">Contact Information</h2>
              <div className="space-y-6">
                <ContactInfo
                  icon={<MapPin className="h-5 w-5 text-primary-600" />}
                  title={t('address')}
                  content="Chandpur, Chittagong, Bangladesh"
                />
                <ContactInfo
                  icon={<Mail className="h-5 w-5 text-primary-600" />}
                  title={t('email')}
                  content="aljubayer92@gmail.com"
                  link="mailto:aljubayer92@gmail.com"
                />
                <ContactInfo
                  icon={<Phone className="h-5 w-5 text-primary-600" />}
                  title={t('phone')}
                  content="+8801305223310"
                  link="tel:+8801305223310"
                />
              </div>

              {/* Map */}
              <div className="mt-8 overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118421.14821995626!2d90.56982232157438!3d23.22876014868166!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3754fb02dacdabed%3A0xebc3ae97790e8189!2sChandpur%2C%20Bangladesh!5e0!3m2!1sen!2sus!4v1705340325302!5m2!1sen!2sus"
                  width="100%"
                  height="300"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Guru Travel Location"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

interface ContactInfoProps {
  icon: React.ReactNode;
  title: string;
  content: string;
  link?: string;
}

const ContactInfo: React.FC<ContactInfoProps> = ({ icon, title, content, link }) => {
  return (
    <div className="flex">
      <div className="mt-1 mr-4">{icon}</div>
      <div>
        <h3 className="font-semibold">{title}</h3>
        {link ? (
          <a href={link} className="text-gray-600 hover:text-primary-600">
            {content}
          </a>
        ) : (
          <p className="text-gray-600">{content}</p>
        )}
      </div>
    </div>
  );
};

export default ContactPage;