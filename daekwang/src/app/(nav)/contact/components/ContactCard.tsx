import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const ContactCard = () => {
  return (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>문의하기</CardTitle>
        <CardDescription>PC암거/설치/시공 문의</CardDescription>
      </CardHeader>
      <CardContent>
        <form>
          <div className="grid w-full items-center gap-4">
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">이름</Label>
              <Input id="name" placeholder="성함을 입력해주세요" />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">연락처</Label>
              <Input
                id="phone"
                placeholder="(010-0000-0000) 연락가능한 번호 입력"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="name">이메일</Label>
              <Input
                id="email"
                placeholder="abcd@gmail.com 양식으로 입력하세요"
              />
            </div>
            <div className="flex flex-col space-y-1.5">
              <Label htmlFor="framework">공사 내역</Label>
              <Textarea placeholder="견적을 작성하세요"></Textarea>
            </div>
          </div>
        </form>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">취소</Button>
        <Button>제출하기</Button>
      </CardFooter>
    </Card>
  );
};

export default ContactCard;
