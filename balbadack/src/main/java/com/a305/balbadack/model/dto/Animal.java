package com.a305.balbadack.model.dto;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.ForeignKey;

import lombok.AccessLevel;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import lombok.ToString;

@NoArgsConstructor(access = AccessLevel.PROTECTED)
@AllArgsConstructor
@Builder
@Getter
@Setter
@ToString
@Entity(name="animal")
public class Animal {

    @Id
	@GeneratedValue(strategy = GenerationType.IDENTITY) // IDENTITY로 해야 Auto Increment
	@Column(nullable = false, unique = true)
    private int a_code;
    
    @Column(length = 30, nullable = false)
    private String a_type;

    @Column(length = 30, nullable = false)
    private String a_species;

    @Column(nullable = false)
    private double a_kg;
    
    @Column(columnDefinition = "tinyint(1) default 0")
    private Boolean a_deleted;

    // 아이디
    @ManyToOne(fetch = FetchType.LAZY)
	@JoinColumn(name = "u_id", referencedColumnName = "u_id", insertable = false, updatable = false, foreignKey = @ForeignKey(name = "fk_animal_uid"))
	private User user;
    
}