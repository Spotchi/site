---
layout: post
title: "Godel's incompleteness theorems : ignorance is a part of maths"
date: 2019-10-28 18:00:00
tags: maths
use_math: true

---

For millenia, logic has played a central part in the development of knowledge. We use it to decide
what is right or wrong in everyday life and to expand the realm of truth in Science and Mathematics.
We consider logic to be universal, so much so that we often take it for granted. Although it seems
sufficient to deal with most of the problems we encounter, how do we know logic itself is right? To
answer this we need to know how to talk about logic "logically".


At the core of logic is the formal proof. It is a sequence of sentences in formal language. In order
to determine whether the proof is valid or not, we will resort to axioms (sentences that are always
true) and inference rules (a mechanism through which a sentence can be deducted from one or more
preliminary sentence(s) known as premise(s)). We will refer to a combination of formal language,
axioms and inference rules as a formal system.

This is what it might look like in natural language :

<center><em>All beings are made of atoms</em></center>

<center><em>Reggie is a being</em></center>

<center><em>Reggie is made of atoms</em></center>
In this example we have taken "All beings are made of atoms" and "Reggie is a being" as axioms of
our system, and the inference rule we used is simply the fact that if a property is true for all
members of a class, then it must be true for a particular member.

The point here is not to argue about the truth of the axioms but more so to determine whether
a proof is valid or not.

## A very brief history of Formal Systems

From the end of the 19th century to the middle of the 20th century, many mathematicians worked on
formalizing Set Theory, from its inception by Georg Cantor to later work by various mathematicians
including Gottlob Frege, Bertrand Russell as well as Ernst Zermelo and Abraham Fraenkel who gave
their name to ZF(C) (Zermelo-Frankel set theory)which is still in use today.

When in the year 1900 the mathematician David Hilbert published a list of 23 problems {% cite hilp --file godel_incompleteness %} , the
notion was that with a suitable formal system, all of the statements in mathematics could either be
proved right or wrong. There is no ignorabimus, we can always find out whether a formal sentence is
true or false. This is what we call Completeness. Hilbert's 10th problem in fact asks for
a construction of the solution for a specific class of equations, the Diophantine equations,
assuming that there had to be such an algorithm. In his second problem, he also asks for a proof of
the Consistency of the axioms of arithmetic, meaning whether it would be impossible to prove
a sentence in arithmetic and its opposite. The promise of finally filling the gaps in mathematics
seem to have appealed to young Kurt Gödel and he started his PhD thesis with the intention of
contributing to Hilbert's dream.

## Gödel numbering and representability
<em>This paragraph contains some mathematical notation and contain a sketch of the proof of the
incompleteness theorems. I've tried to make it digestable, but if that's just not your cup of tea,
go ahead and skip to the First Incompleteness Theorem section</em>

Besides consistency, there is another notion which is central to understanding Set
Theory: representability. A weakly representable set has a corresponding formula. A given integer is
in the set if and only if we can prove the formula to be true for that integer. This essentially
implies that there is a method to enumerate all elements of the set, but we might not necessarily be
able to prove that an element is not in the set.

To enable talking about logic within the language we introduce Gödel numbering, the association of
any formula of the formal language with a natural number. This is today quite intuitive as anything
we represent in a computer is in binary code. Let us not explain exactly how this is done and assume
that there is such a mapping. More interestingly, proofs are also represented as numbers...

We will define the code of a formula $A$ as $\ulcorner A \urcorner$. All the rules of logic can then 
be transposed as functions of the Godel numbers, even the inference rules.
One key consequence of this is that we can validate / invalidate whether a sequence of statements using
arithmetic! 

With that knowledge, let us go back to Set Theory.
The question of whether a number is in a set could be answered by proving that a specific formula is
true for the number x.

{% raw %}
$$x \in S_A \iff F \vdash A(x) $$
{% endraw %}
Here we have introduced several notations : $F$ is the formal system that we're working with, and
$A$ is a formula that has a value of True or False for every integer, and corresponds to the set $S_A$
Here, $F \vdash A(x)$ indicates that it is possible to prove that $A(x)$ is True with the axioms and
inference rules of F.
The $\iff$ symbol indicates the provability of $A(x)$ for all elements of the set $S_a$. This
property is known as weak representability and is very important for what follows, as it establishes
a bridge between Set Theory and the formal system.

Note that now that we can now use formulas as arguments of other formulas thanks to Godel numbering.
We could for example define the set of all provable sentences, and find a nice formula that can only
be proved to be true for the Godel number of provable statements(formulas). And so, we define 
provability as a formula of the language! [^1]

$$ F \vdash A \implies F \vdash Prov_F(\ulcorner A \urcorner) $$

[^1]: For the sake of brevity, we'll have to take the existence of that formula as given


# The Diagonalization Lemma
With Godel numbering, we can now write equivalent formulas, but using numbers as representations of
formulas!
We can put that strange loop in mathematics to find a formula's special "fixed point" sentence. The
diagonalization lemma tells us that for any formula $A$ we can construct a sentence $D$ such that
$$ F \vdash D \iff A(\ulcorner D \urcorner)$$
That sentence's provability is inextricably linked to $A$'s true value. If $D$ is provable, then
$A(\ulcorner D \urcorner)$ is true, and if it is false then $D$ is not provable. 
Applying this to the negation of the provability sentence described earlier yields the first
of Gödel's incompleteness theorems.

## Gödel's First Incompleteness Theorem

Assuming $F$ is a formal system with sufficient arithmetic[^2] then we can construct a sentence $G_F$
of the language of $F$ such that $G_F$ is true but not provable. 
In other terms, we have a sentence $G_F$ that says the following : 
<center><em>This sentence is not provable </em></center>
We could try to prove this sentence. But if we succeeded that
would mean the sentence would be provable and that contradicts its very meaning of the sentence. The
sentence would then be false and we cannot prove false sentences.
Is it False then? We encounter a similar problem when assuming the sentence is False, since that
would again lead us to proving a false sentence.
Seeing as we assumed that the system was consistent, that sentence is <b>not provable</b>, <b>not
False</b> and therefore it <b>must be true</b>.

## Gödel's Second Incompleteness Theorem
We <b>have proven</b> that consistency of the system implies that the Gödel sentence is true but 
unprovable. The second theorem is about consistency and is linked to Hilbert's second problem. It 
was noted that if a system can prove its consistency, then it must also be able to prove the Gödel
sentence $G_F$.
$F$ can prove $Consistency(F)$ 
then (Gödel's first theorem : $Consistency(F)$ implies that $G_F$ is true)
If $F$ can prove $Consistency(F)$ then $F$ can prove $G_F$. By contradiction, we can then 
conclude that consistency cannot be proven.

## Incompleteness vs Decidability
Later in the century, Alonzo Church and Alan Turing took a similar approach to prove the
undecidability of First Order Logic.{% cite hopcroft --file godel_incompleteness %} 
A theorem that there is a mechanical way to verify is called recursive. Of course if a theorems cannot be proven, then it can hardly be verified mechanically. 
On the other hand, for a specific set, there might be a way to enumerate elements of the set, 
but there might not be a general, mechanical way to verify (prove) that a particular number belongs 
to the set. One example of such a problem is the <b>Halting Problem</b>. It is defining the set of
programs that terminate. Of course, it is possible to build an infinity of programs that satisfy
this definition, but for a specific program it is not always possible to know if it will, like
a program that looks for integers that satisfy Fermat's last theorems.
A theory is called decidable if all of its theorems (sentences derivable in it) is decidable. 
Incompleteness of a system implies its undecidability but there are many cases where a theory is
complete yet undecidable. Gödel himself showed that there are complete systems in First-Order
Logic, yet First Order Logic is undecidable.

## Humans vs Mechanisms

Some would see these theorems as a fundamental flaw, an acknowledgement by mathematics of its own
shortcomings, though there really is nothing wrong with probing the limits of our tools for 
reasoning. Beyond Gödel's sentence which might seem a specific edge case that should not be allowed,
there are "reasonable" cases that are not provable and even more that are not computable. So is 
there something missing in our system? Or is there any system at all with sufficient arithmetic capable of 
completeness? Based on the discussion we just had, it would seem a mathematician is capable to find 
a sentence to be true where formal systems are not able to prove them. Therefore no formal system can 
be devised that encompasses the mathematician's knowledge or general human intelligence.
Though what struck me as I examined the consequences of the GITs, is that we actually used logic to
come to the incompleteness results. Indeed they are just another set of theorems, inferred from our
definitions of provability and notations related to Gödel numbering.
We have found that we cannot always prove the truth, yet on that journey we 
used the very system, that we are trying to understand better. The incompleteness theorems are now
just another tennet of mathematics, upon which we can expand and prove more and more theorems. 

The incompleteness theorems are just stating a system's limit, assuming the system to be consistent.
Any "logic machine" could verify that proof, and there is no mysterious human factor that sets us
apart from that machine.

This mathematical introspection had a major influence in the development of computer
science. In fact formal systems were a central of artificial intelligence research in its early days.
However this approach sometimes labeled as Good Old Fashioned Artificial Intelligence (GOFAI) has 
shown its limits in terms of practicality. In these systems, a gigantic number of axioms and 
definitions is needed to arrive at a conclusion in all but the most basic of practical cases.
In recent years, AI has experienced a resurgence of interest, due to availability of data and
hardware and using non-deductive methods (neural networks, statistical inference). Of course the
decisions we arrive at using these methods aren't as clean-cut as when using a formal system. And as
we design machines with higher and higher power of abstraction, it is important to remember, we just
can't know everything.

## References

{% bibliography --file godel_incompleteness %}


