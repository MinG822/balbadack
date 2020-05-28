package com.a305.balbadack.model.dto;

import javax.persistence.*;

import lombok.*;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Getter
@Setter
@ToString
@Entity
@Table(name = "careinfo")
public class Careinfo {
    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // IDENTITY로 해야 Auto Increment
	@Column(nullable = false, unique = true, name = "ci_code")
    private Integer ciCode;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "h_code", referencedColumnName = "h_code", insertable = false, updatable = false, foreignKey = @ForeignKey(name = "fk_hospital_h_code"))
    private Hospital hospital;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "a_code", referencedColumnName = "a_code", insertable = false, updatable = false, foreignKey = @ForeignKey(name = "fk_animal_a_code"))
    private Animal animal;

    @Column(nullable = false, name = "ci_price")
    private Integer ciPrice;
    
    @Column(nullable = false, columnDefinition = "boolean default false", name = "ci_open")
    private Boolean ciOpen;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "c_code", referencedColumnName = "c_code", insertable = false, updatable = false, foreignKey = @ForeignKey(name = "fk_carelist_c_code"))
    private Carelist carelist;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "r_code", referencedColumnName = "r_code", insertable = false, updatable = false, foreignKey = @ForeignKey(name = "fk_review_r_code"))
    private Review review;

    @Column(length = 50, nullable = false, name = "c_name")
    private String cName;

}