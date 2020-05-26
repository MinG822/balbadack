package com.a305.balbadack.model.dto;

import java.util.Date;
import java.util.List;

import javax.persistence.*;

import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "review")
public class Review {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // IDENTITY로 해야 Auto Increment
	@Column(nullable = false, unique = true, name = "r_code")
    private int rCode;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "u_id", referencedColumnName = "u_id", insertable = false, updatable = false, foreignKey = @ForeignKey(name = "fk_user_u_id"))
    private User user;

    @Column(length = 20, nullable = false, name = "r_nickname")
    private String rNickname;

    @Column(length = 500, nullable = true, name = "r_photo1")
    private String rPhoto1;

    @Column(length = 500, nullable = true, name = "r_photo2")
    private String rPhoto2;

    @Column(length = 500, nullable = true, name = "r_photo3")
    private String rPhoto3;

    @Column(length = 1000, nullable = true, name = "r_content")
    private String rContent;

    @Column(nullable = false, columnDefinition = "boolean default false", name = "r_receipt")
    private boolean rReceipt;

    @Column(nullable = false, name = "r_treatmentdate")
    private Date rTreatmentdate;

    @Column(nullable = false, name = "r_date")
    private Date rDate;
    
    @Column(nullable = false, name = "r_overtreatment")
    private int rOvertreatment;
    
    @Column(nullable = false, name = "r_kindness")
    private int rKindness;
    
    @Column(nullable = false, name = "r_result")
    private int rResult;

    @Column(nullable = false, name = "r_professionality")
    private int rProfessionality;
    
    @Column(nullable = false, name = "r_clean")
    private int rClean;

    @Column(nullable = false, name = "r_revisit")
    private int rRevisit;
    
    @Column(length = 100, nullable = false, name = "r_purpose")
    private String rPurpose;
    
    @Column(nullable = false, columnDefinition = "int default 0", name = "r_report")
    private int rReport;
    
    @Column(nullable = false, columnDefinition = "boolean default false", name = "r_deleted")
    private boolean rDeleted;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "h_code", referencedColumnName = "h_code", insertable = false, updatable = false, foreignKey = @ForeignKey(name = "fk_hospital_h_code"))
    private Hospital hospital;
    
    @OneToMany(mappedBy="review")
    private List<Careinfo> careinfo;

    @OneToMany(mappedBy="review")
    private List<Report> report;

    @OneToMany(mappedBy="review")
    private List<Good> good;
    
}