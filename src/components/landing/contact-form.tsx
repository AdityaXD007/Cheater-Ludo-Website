'use client'
import Container from '../global/container'
import AnimateWrapper from '../global/animate-wrapper'
import {
  ContactFormSchema,
  ContactFormSchemaType,
} from '@/schema/contact-form-schema'
import {zodResolver} from '@hookform/resolvers/zod'
import {Controller, useForm} from 'react-hook-form'
import {Field, FieldError, FieldGroup, FieldLabel} from '../ui/field'
import {Input} from '../ui/input'
import {Textarea} from '../ui/textarea'
import {Button} from '../ui/button'
import Image from 'next/image'
import {toast} from 'sonner'

const ContactForm = () => {
  const form = useForm<ContactFormSchemaType>({
    resolver: zodResolver(ContactFormSchema),
    defaultValues: {
      fullName: '',
      email: '',
      phoneNumber: '',
      message: '',
    },
  })

  const onSubmit = async (data: ContactFormSchemaType) => {
    try {
      const res = await fetch(process.env.NEXT_PUBLIC_API_URL + '/contact-us', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify({
          full_name: data.fullName,
          email: data.email,
          phone_number: data.phoneNumber,
          message: data.message,
        }),
      })
      if (!res.ok) {
        const data = await res.json()
        throw new Error(data?.message || 'Failed to send message')
      }
      const resData = await res.json()
      if (resData.success) {
        form.reset()
        toast.success(resData?.message || 'Message sent successfully')
      }
    } catch (error) {
      console.log(error)
      toast.error(
        error instanceof Error ? error.message : 'Failed to send message',
      )
    }
  }

  return (
    <Container id="contact-us" className="py-20 lg:py-32">
      <AnimateWrapper>
        <section className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Column: Image */}
          <div className="relative aspect-square lg:aspect-4/5 w-full max-h-150 overflow-hidden rounded-2xl bg-muted/20 order-last lg:order-first">
            <Image
              src="/images/landing-hero.png"
              alt="Contact Support"
              height={800}
              width={800}
              className="object-contain"
              priority
            />
          </div>

          {/* Right Column: Form */}
          <div className="flex flex-col gap-8">
            <div className="space-y-2">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                Get in Touch
              </h2>
              
            </div>

            <form id="contact-us-form" onSubmit={form.handleSubmit(onSubmit)}>
              <FieldGroup>
                <Controller
                  control={form.control}
                  name="fullName"
                  render={({field, fieldState}) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="fullName">Full Name</FieldLabel>
                      <Input
                        {...field}
                        id="fullName"
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter your full name"
                        autoComplete="off"
                        className="bg-background"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  control={form.control}
                  name="email"
                  render={({field, fieldState}) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="email">Email</FieldLabel>
                      <Input
                        {...field}
                        id="email"
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter your email"
                        autoComplete="off"
                        className="bg-background"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  control={form.control}
                  name="phoneNumber"
                  render={({field, fieldState}) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="phoneNumber">
                        Phone Number
                      </FieldLabel>
                      <Input
                        {...field}
                        id="phoneNumber"
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter your phone number"
                        autoComplete="off"
                        className="bg-background"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <Controller
                  control={form.control}
                  name="message"
                  render={({field, fieldState}) => (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="message">Message</FieldLabel>
                      <Textarea
                        {...field}
                        id="message"
                        aria-invalid={fieldState.invalid}
                        placeholder="Enter your message"
                        autoComplete="off"
                        rows={6}
                        className="resize-none bg-background"
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  )}
                />
                <div className="pt-2 flex">
                  <Button
                    form="contact-us-form"
                    type="submit"
                    size={'lg'}
                    className="w-full  sm:w-auto"
                  >
                    Submit Message
                  </Button>
                </div>
              </FieldGroup>
            </form>
          </div>
        </section>
      </AnimateWrapper>
    </Container>
  )
}

export default ContactForm
