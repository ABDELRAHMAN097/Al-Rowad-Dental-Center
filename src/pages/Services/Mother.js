import React from "react";
import mother from "../../assets/img/mother.jpg";
import "./Orthopedic.scss";

export default function Mother() {
  return (
    <div className="orth">
      <div className="hero">
        <h2>Maternity Care</h2>
        <p>
          Our Maternity Care Program offers comprehensive prenatal, delivery,
          and postnatal care. Our team of obstetricians, midwives, and nurses is
          dedicated to ensuring a safe and comfortable pregnancy journey. From
          routine check-ups to childbirth classes and lactation support, we are
          here for you every step of the way.
        </p>
      </div>
      <div className="info">
        <p>
          Pregnancy is a beautiful and transformative journey, and we are here
          to support you with exceptional maternity care. Our Maternity Care
          Program focuses on providing comprehensive services that cater to the
          unique needs of expectant mothers.
        </p>
        <p>
          <span>Prenatal Care:</span> Our prenatal care begins with early
          screenings and continues throughout your pregnancy. We offer regular
          check-ups, ultrasounds, and personalized care plans to monitor both
          maternal and fetal health.
        </p>
        <p>
          <span>Childbirth Options:</span> We respect your childbirth
          preferences and offer a range of options, from natural births to
          cesarean sections. Our experienced team ensures a safe and comfortable
          delivery experience.
        </p>
        <p>
          <span>Postnatal Care:</span> After childbirth, our care extends to
          postnatal support. We provide guidance on newborn care, breastfeeding,
          and postpartum recovery. Our lactation consultants are available to
          assist with breastfeeding challenges.
        </p>
        <p>
          <span>Parenting Resources:</span>We offer parenting classes and
          resources to help you confidently navigate the joys and challenges of
          parenthood. Our goal is to empower you with the knowledge and skills
          needed to care for your newborn.
        </p>
        <p>
          <span>Family-Centered Approach:</span>We emphasize a family-centered
          approach, encouraging family involvement in the birthing process and
          promoting a supportive environment for both mothers and newborns.
        </p>
      </div>
      <div>
        <img className="img" src={mother} alt="" />
      </div>
    </div>
  );
}
