"use client"
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form"
import * as z from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import axios from 'axios'
import { useRouter } from "next/navigation";

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "Team name is required"
  }),
})

const CreateTeamForm = () => {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    }
  })

  const isLoading = form.formState.isSubmitting
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      const res = await axios.post('/api/team', values)
      router.push(`/dashboard/${res.data.id}`)
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form {...form}>
      <form className="mt-10" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField 
          control={form.control}
          name="name"
          render={(({field}) => (
            <FormItem>
              <FormLabel>Team Name</FormLabel>
              <FormControl>
                <Input disabled={isLoading} autoFocus className='md:w-[500px] focus-visible:ring-0 focus-visible:ring-offset-0 focus:border-primary' placeholder='Enter Team name' {...field} />
              </FormControl>
            </FormItem>
          ))}
        />
        <Button className="mt-7 w-full" variant='primary' disabled={isLoading}>Create</Button>
      </form>
    </Form>
  )
}

export default CreateTeamForm
