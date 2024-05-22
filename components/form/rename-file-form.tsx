"use client"
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { zodResolver } from "@hookform/resolvers/zod";
import { File } from "@prisma/client";
import axios from 'axios';
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import * as z from 'zod';

const FormSchema = z.object({
  name: z.string().min(1, {
    message: "File name is required"
  }),
})

const RenameFileForm = ({file}: {file: File}) => {
  const router = useRouter()
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
    }
  })

  useEffect(() => {
    form.setValue('name', file.name)
  }, [form, file])

  const isLoading = form.formState.isSubmitting
  const onSubmit = async (values: z.infer<typeof FormSchema>) => {
    try {
      axios.put(`/api/file/${file.id}`, values)
      router.refresh()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form {...form}>
      <form className="space-y-3" onSubmit={form.handleSubmit(onSubmit)}>
        <FormField 
          control={form.control}
          name="name"
          render={(({field}) => (
            <FormItem>
              <FormControl>
                <Input disabled={isLoading} className='focus-visible:ring-0 focus-visible:ring-offset-0 border-none hover:border hover:border-primary' placeholder='Enter File name' {...field} />
              </FormControl>
            </FormItem>
          ))}
        />
      </form>
    </Form>
  )
}

export default RenameFileForm
